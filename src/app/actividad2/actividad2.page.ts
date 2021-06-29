import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { devOnlyGuardedExpression } from '@angular/compiler';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.page.html',
  styleUrls: ['./actividad2.page.scss'],
})
export class Actividad2Page implements OnInit {

  public t        : string;
  public ran      : number;
  public desc     : number;
  public d        : string;
  public total    : number;
  txtInv          : number;
  public invTotal : number;

  constructor( public NC:NavController, public AR:ActivatedRoute ) {}

  ngOnInit() {
    let t = this.AR.snapshot.paramMap.get('t');
    this.t = t;
  }

  generarNumero(){
    this.ran = Math.floor(Math.random() * 148)
    if (this.ran < 74) {
      this.desc = (parseInt(this.t) * 0.15);
      this.d    = "15%";
    }else if (this.ran >= 74) {
      this.desc = (parseInt(this.t) * 0.2);
      this.d    = "20%";
    }
    this.total = (parseInt(this.t) - this.desc);
  }

  calcularInversion(){
    var inv = this.txtInv;
    if (inv != undefined || inv != 0) {
      this.invTotal = (((inv * 0.02) * 12) + inv);
    }
  }

}
