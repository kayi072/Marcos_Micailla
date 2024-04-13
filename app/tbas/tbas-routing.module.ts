import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbasPage } from './tbas.page';

const routes: Routes = [
  {
    path: '',
    component: TbasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbasPageRoutingModule {}
