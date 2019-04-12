import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { PlantService } from '../../shared/plant.service';
import { Plant } from '../../shared/plant';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';
import { PlantDialogComponent } from '../../components/plant-dialog/plant-dialog.component';

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

  performFilter(filterBy: string): Plant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.plants.filter((plant: Plant) =>
      plant.commonName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  openDetailsDialog(plantId: number): void {
    // TODO: remove debug log
    console.info(`Id : ${plantId} clicked in PlantsComponent`);

    this.dialog.open(PlantDialogComponent, {
      data: {
        plant: this.plants.find(plant => plant.id === plantId)
      }
    });
  }

  onFavoriteClicked(plantId: number): void {
    const idx = this.plants.findIndex(plant => plant.id === plantId);

    this.plants[idx].favorite = !this.plants[idx].favorite;

    // TODO: remove debug log
    console.info(`Id: ${plantId} favorite cliked. New value : ${this.plants[idx].favorite}`);

  }

  // Constructor
  constructor(
    private plantService: PlantService,
    private tagService: TagService,
    private dialog: MatDialog) {
    this.tableColumnsToDisplay = ['id', 'commonName'];
  }

  // Init
  ngOnInit() {
    // Get Hard-coded calues from service waiting to get them from API
    this.plants = this.plantService.getPlants();
    this.listFilter = '';
    this.tags = this.tagService.getTags();
    this.primaryTags = this.tagService.getPrimaryTags();
  }

}
