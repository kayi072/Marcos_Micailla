import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowObjectsPage } from './show-objects.page';

const routes: Routes = [
  {
    path: '',
    component: ShowObjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowObjectsPageRoutingModule {}
