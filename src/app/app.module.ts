import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule }    from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ServicioService} from "./ui/servicio.service";

import { AppComponent } from './app.component';

import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	UiModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
