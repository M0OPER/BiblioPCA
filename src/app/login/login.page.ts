import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import validator from 'validator';
import { MenuController, NavController } from '@ionic/angular';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userEmail: any;
  public userPass: any;

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPass : new FormControl('')
  });

  loginFormValidator={
    userEmail: {empty :'', email:''},
    userPass: {empty :''}
  }

  constructor(public NC:NavController, public MC:MenuController) { 
    this.userEmail = 'edwin@gmail.com';
    this.userPass = 'montes';
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.MC.enable(false);
  }

  formValidator(): boolean{
    if (validator.isEmpty(this.loginForm.value.userEmail)) {
      this.loginFormValidator.userEmail.empty = 'La direccion de correo es requerida';
      return false;
    }else{
      this.loginFormValidator.userEmail.empty = '';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)) {
      this.loginFormValidator.userEmail.email = 'Correo invalido';
      return false;
    }else{
      this.loginFormValidator.userEmail.email = '';
    }
    if (validator.isEmpty(this.loginForm.value.userPass)) {
      this.loginFormValidator.userPass.empty = 'La contraseña es requerida';
      return false;
    }else{
      this.loginFormValidator.userPass.empty = '';
    }
    return true;
  }

  verificarLogin(){
    if (this.formValidator()) {
      this.NC.navigateForward('/home');
      this.MC.enable(true);
      console.log("Formulario validado");
    }
  }

}
