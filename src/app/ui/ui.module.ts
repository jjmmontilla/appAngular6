import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule }    from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {ServicioService} from "./servicio.service";

import { MenuComponent } from './menu/menu.component';
import { FormBlackComponent } from './form-black/form-black.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
  	MenuComponent,
  	FormBlackComponent
  ],
  exports: [
  	MenuComponent,
  	FormBlackComponent
  ],
  providers: [ServicioService]
})
export class UiModule { }
