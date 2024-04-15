import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './calculator-routing.module';

import { ComponentsPage } from './calculator.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule
  ],
  declarations: [ComponentsPage]
})
export class ComponentsPageModule {}
