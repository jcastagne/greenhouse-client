import { Component, OnInit } from '@angular/core';

import { PlantService } from '../plant.service';
import { IPlant } from '../plant';

@Component({
  selector: 'gh-plant-list',
  templateUrl: './plant-list.component.html'
})
export class PlantListComponent implements OnInit {

  tableColumnsToDisplay: string[];
  plants: IPlant[] = [];
  constructor(private plantService: PlantService) {
    this.tableColumnsToDisplay = ['id', 'commonName'];
  }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
    console.info(this.plants);
  }

}