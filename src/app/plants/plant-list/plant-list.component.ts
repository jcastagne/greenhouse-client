import { Component, OnInit } from '@angular/core';

import { PlantService } from '../plant.service';
import { IPlant } from '../plant';

@Component({
  selector: 'gh-plant-list',
  templateUrl: './plant-list.component.html'
})
export class PlantListComponent implements OnInit {

  plants: IPlant[] = [];
  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }

}
