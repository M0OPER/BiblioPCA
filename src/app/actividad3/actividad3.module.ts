import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actividad3PageRoutingModule } from './actividad3-routing.module';

import { Actividad3Page } from './actividad3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actividad3PageRoutingModule
  ],
  declarations: [Actividad3Page]
})
export class Actividad3PageModule {}
