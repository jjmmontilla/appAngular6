import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MenuComponent } from "./ui/menu/menu.component";
import { FormBlackComponent } from "./ui/form-black/form-black.component";

import {ServicioService} from "./ui/servicio.service";

//libreria rxjs
import { Observable } from 'rxjs';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  public showForm: boolean = false;
  public nameItem: string = "";

  @ViewChild('firstMenu') menu: MenuComponent; 

  menuItems = [
  	{"id" : 1, "name" : "Boeign"}
  ];

  constructor(public servicioService: ServicioService){}
  
  ngAfterViewInit () {
    this.menu.showForm
    .subscribe(
      resp =>{
	      this.showForm = resp;
      }
    );

    this.menu.nameItem
    .subscribe(
      resp =>{
	      this.nameItem = resp;
      }
    );

    this.servicios();

    $('.navbar-toggler').click(function(){
      if($('.nav-sidebar').hasClass('active')){
        $('.nav-sidebar').removeClass('active');
      }else{
        $('.nav-sidebar').addClass('active');
      }
    });

    $('section.nav-sidebar .nav-item').click(function(){
      console.log("---");
      $('.nav-sidebar').removeClass('active');
    });

  }

  change(option: any) :void{
  	let activo = this.menu.activeform(option);
  	console.log(activo);
  }


  servicios() {
    this.servicioService.getServicios().subscribe(data => {
      this.menuItems = data;
      //console.log(data);
    });
  }

}
