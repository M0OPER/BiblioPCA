import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public r: number;

  constructor( public NC:NavController ) {}

  goToMaterias(){
    this.NC.navigateForward('/materias/1800')
  }
  
  goToActividad2(){
    this.NC.navigateForward('/actividad2/100000')
  }

  goToPractica(){
    this.NC.navigateForward('/practica')
  }

  goToLogin(){
    this.NC.navigateForward('/login')
  }

}
