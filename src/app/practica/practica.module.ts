import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticaPageRoutingModule } from './practica-routing.module';

import { PracticaPage } from './practica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PracticaPageRoutingModule
  ],
  declarations: [PracticaPage]
})
export class PracticaPageModule {}
