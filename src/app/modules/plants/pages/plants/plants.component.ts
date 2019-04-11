import { Component, OnInit } from '@angular/core';

import { PlantService } from '../../shared/plant.service';
import { Plant } from '../../shared/plant';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  templateUrl: './plants.component.html'
})
export class PlantsComponent implements OnInit {

  tableColumnsToDisplay: string[];
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];
  primaryTags: Tag[];
  tags: Tag[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPlants = this.listFilter ? this.performFilter(this.listFilter) : this.plants;
  }

  constructor(private plantService: PlantService, private tagService: TagService) {
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
    this.tags = this.tagService.getTags();
    this.primaryTags = this.tagService.getPrimaryTags();
  }

}
