import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlantCardComponent } from './components/plant-card/plant-card.component';

@NgModule({
  declarations: [
    PlantsComponent,
    PlantCardComponent],
  imports: [
    SharedModule,
    PlantRoutingModule
  ]
})
export class PlantModule { }
