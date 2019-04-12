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
  //#region bound variables
  tableColumnsToDisplay: string[];
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];
  primaryTags: Tag[];
  tags: Tag[];

  private pListFilter: string;
  get listFilter(): string {
    return this.pListFilter;
  }
  set listFilter(value: string) {
    // Once linked to the API, should consider using a Search button for performance
    this.pListFilter = value;
    this.filteredPlants = this.listFilter ? this.performFilter() : this.plants;
  }

  private ptagFilter: string[];
  get tagFilter(): string[] {
    return this.ptagFilter;
  }
  set tagFilter(value: string[]) {
    // Once linked to the API, should consider using a Search button for performance
    this.ptagFilter = value;
    this.filteredPlants = this.performFilter();
  }
  //#endregion


  //#region bound methods

  performFilter(): Plant[] {
    // Filter by commonName
    const filterBy = this.listFilter.toLocaleLowerCase();
    return this.plants.filter((plant: Plant) =>
      // Filter by CommonName
      plant.commonName.toLocaleLowerCase().indexOf(filterBy) !== -1
      &&
      // Filter by tags
      this.arrayContains(plant.tags.map(tag => tag.value), this.tagFilter));
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

  onChangeSelectedTagFilter(value): void {
    this.tagFilter = value.value;
  }
  //#endregion


  //#region Init

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
    this.tagFilter = [];
  }
  //#endregion


  //#region  private methods

  arrayContains(array, filterArray): boolean {
    for (let element of filterArray) {
      if (array.indexOf(element) === -1) {
        // Returns false as soon as an element filterArray is not in array
        return false;
      }
    }
    return true;
  }
  //#endregion

}
