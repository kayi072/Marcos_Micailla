import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbasPageRoutingModule } from './tbas-routing.module';

import { TbasPage } from './tbas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbasPageRoutingModule
  ],
  declarations: [TbasPage]
})
export class TbasPageModule {}
