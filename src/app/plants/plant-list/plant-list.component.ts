import { Component, OnInit } from '@angular/core';

import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'gh-plant-list',
  templateUrl: './plant-list.component.html'
})
export class PlantListComponent implements OnInit {

  tableColumnsToDisplay: string[];
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPlants = this.listFilter ? this.performFilter(this.listFilter) : this.plants;
  }

  constructor(private plantService: PlantService) {
    this.tableColumnsToDisplay = ['id', 'commonName'];
  }

  performFilter(filterBy: string): Plant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.plants.filter((plant: Plant) =>
      plant.commonName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    // Get Hard-coded calues from service waiting to get them from API
    this.plants = this.plantService.getPlants();
    this.listFilter = '';
  }

}
