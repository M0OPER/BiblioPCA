import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Actividad3Page } from './actividad3.page';

const routes: Routes = [
  {
    path: '',
    component: Actividad3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Actividad3PageRoutingModule {}
