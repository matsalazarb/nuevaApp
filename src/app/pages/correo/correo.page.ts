import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {users} from '../../../usuarios/users';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  recContra!: FormGroup;

  constructor(private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private alrettController: AlertController) { }

  ngOnInit() {
    this.recContra = this.initForm();
    console.log(this.recContra)
  }

  onSubmit(): void {
    let mensaje = "";

    if(this.recContra.invalid){
      console.log("no escribio nada")
      return
    }


    const correo =this.recContra.value.email;
    let existe = false;

//recorrer usuarios para validar la exixtencia del correo
    for(let usuario of users){
      if(correo === usuario.email){
        existe = true;
      }
    }
    //si exixte buscamos la contraseña
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }



}
