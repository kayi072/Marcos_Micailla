import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowObjectsPageRoutingModule } from './show-objects-routing.module';

import { ShowObjectsPage } from './show-objects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowObjectsPageRoutingModule
  ],
  declarations: [ShowObjectsPage]
})
export class ShowObjectsPageModule {}
