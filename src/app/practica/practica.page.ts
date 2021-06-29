import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.page.html',
  styleUrls: ['./practica.page.scss'],
})
export class PracticaPage implements OnInit {

  numero1: any;
  numero2: any;
  total   : number;

  constructor() { }

  ngOnInit() {
  }
  
  sumarNumeros(){
    var num1 = parseInt(this.numero1);
    var num2 = parseInt(this.numero2);
    this.total = (num1 + num2);
    this.numero1 = "";
    this.numero2 = "";
  }

}
