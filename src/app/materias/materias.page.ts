import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  public id2    : string;
  public materia: string = "CIVIL";
  public libros : any    = ["LAS OBLIGACIONES", "EL NUEVO DERECHO DE DAÑOS", "NUEVAS FRONTERAS DEL DERECHO", "LIBRO 2"];
  public total  : number = 4;
  constructor( public NC:NavController, public AR:ActivatedRoute ) {}

  ngOnInit() {
    let id = this.AR.snapshot.paramMap.get('id');
    this.id2 = id;
  }


}
