import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ServicioService} from "../servicio.service";

type UserFields = 'name' | 'email' | 'mobile' | 'age';
type FormErrors = { [u in UserFields]: string };

import * as $ from 'jquery';

@Component({
  selector: 'app-form-black',
  templateUrl: './form-black.component.html',
  styleUrls: ['./form-black.component.scss']
})

export class FormBlackComponent implements OnInit {
	
  @Input()
  nameItem: any;

	userForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'email': '',
    'mobile': '',
    'age': ''
  };

  validationMessages = {
    'name': {
      'required': 'Este campo es requerido.'
    },
    'email': {
      'required': 'Este campo es requerido.',
      'email': 'El correo debe ser un correo valido'
    },
    'mobile': {
      'required': 'Este campo es requerido.',
      'minLength': 'El celular debe tener al menos 5 caracteres.',
      'maxLength': 'El celular no debe tener mas de 8 caracteres.',
      'pattern' : 'Este campo no es valido'
    },
    'age': {
      'required': 'Este campo es requerido.',
      'pattern' : 'Este campo no es valido'
    }
  };

  invalidAge = false; 

  constructor(private fb: FormBuilder, public servicioService: ServicioService) { }

  ngOnInit() {
  	this.buildForm();
    //$('#resultModal').modal("show");
  }

  buildForm() {
    this.userForm = this.fb.group({
    	'name' : ['', Validators.required],
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'mobile' : ['', 
        [ Validators.required, 
          Validators.pattern(/^[0-9]{7,10}$/),
          Validators.minLength(5),
          Validators.maxLength(8)
        ]
      ],
      'age' : ['', 
        [
          Validators.required,
          Validators.pattern(/^[0-9]{2,3}$/)
        ]
      ]
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    this.invalidAge = false;
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'name' || field === 'mobile' || field === 'age')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }

  onSubmit() {
    
    if(this.userForm.valid){
      if(this.userForm.controls.age.value >= 18  &&  this.userForm.controls.age.value <= 100 ){
        //console.log(this.userForm.controls.age.value);
        let name = this.userForm.controls.name.value;
        let age = this.userForm.controls.age.value;
        let mobile = this.userForm.controls.mobile.value;
        let email = this.userForm.controls.email.value;
    
        let resultado = this.servicios(this.userForm.value);
        $(".loader").addClass("active");

        setTimeout(function(){ 
          $(".loader").removeClass("active");
          $("#btn-modal").click() ;
        }, 1500);

        setTimeout(function(){ 
          $("#exampleModal .close").click() ;
        }, 5000);

        this.userForm.reset();

      }else{
        this.invalidAge = true; 
        console.log("No valido el formulario");
      }
      
      return false;
    }
  }

  servicios(solicitud: any) {
    this.servicioService.addServicio(solicitud).subscribe(data => {
      //console.log(data);
    });
  }

}
