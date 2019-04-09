import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './pages/plants/plants.component';

const routes: Routes = [
  { path: 'plants', component: PlantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
