import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantCardComponent } from './plant-card/plant-card.component';

@NgModule({
  declarations: [
    PlantListComponent,
    PlantCardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: []
})
export class PlantModule { }
