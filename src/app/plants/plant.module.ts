import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  declarations: [
    PlantListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class PlantModule { }
