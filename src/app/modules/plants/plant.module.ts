import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlantCardComponent } from './components/plant-card/plant-card.component';
import { PlantDialogComponent } from './components/plant-dialog/plant-dialog.component';
import { PlantComponent } from './pages/plant/plant.component';

@NgModule({
  declarations: [
    PlantsComponent,
    PlantCardComponent,
    PlantDialogComponent,
    PlantComponent],
  imports: [
    SharedModule,
    PlantRoutingModule
  ],
  entryComponents: [PlantDialogComponent]
})
export class PlantModule { }
