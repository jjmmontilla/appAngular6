import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Input()
  menuItems: any;

  @Output() showForm:EventEmitter<any> = new EventEmitter();
  @Output() nameItem:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public activeform(option: any): void{
    this.showForm.emit(true);
    this.nameItem.emit(option.name);

    if($('.nav-sidebar').hasClass('active')){
      $('.nav-sidebar').removeClass('active');
    }
  }

}
