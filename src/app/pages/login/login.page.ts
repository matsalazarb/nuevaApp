import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {users} from '../../../usuarios/users';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private readonly router: Router, 
    private readonly formBuilder: FormBuilder,
    private alertController: AlertController) { }

  ngOnInit() {
    this.loginForm = this.initForm();
    console.log(this.loginForm)
  }

  onSubmit(): void {
    let mensaje = "";
    
    if(this.loginForm.invalid){
    }

    
    const correo=this.loginForm.value.email;
    const contra=this.loginForm.value.password;
    let existe = false;
    
//Recorrer usuarios para validar existencia del correo
    for(let usuario of users) {
      if(correo === usuario.email) {
        existe = true;
      }
    }
    //Si existe buscamos la contrasena
    let contraValida = false;
    if(existe === true) {
        for(let c of users) {
        if(c.password === contra && c.email === correo) {
            contraValida = true;
        }
      }
      if(existe === true && contraValida === true) {
          const navigationExtras: NavigationExtras = {
            state: this.loginForm.value.email
          };
      mensaje = "Inicio de sesion correcto"
          this.router.navigate(['/home'], navigationExtras);  
      }else {
        mensaje = "usuario o clave incorrecta"
      }
    }else {
      //En caso contrario indicamos que las credenciales o el correo son incorrectas.
      mensaje = "Ingrese un correo Valido";
    }

    const alertUser = async (mensaje: string) => {
      const alert = await this.alertController.create({
        header: 'Asistencia Duoc',
        message: mensaje,
        buttons: ['Ok']
      });
      await alert.present();
      await alert.onDidDismiss();
    }
    alertUser(mensaje)
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }



}
