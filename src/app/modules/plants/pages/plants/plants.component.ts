import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { PlantService } from '../../shared/plant.service';
import { Plant } from '../../shared/plant';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from 'src/app/services/tag/tag.service';
import { PlantDialogComponent } from '../../components/plant-dialog/plant-dialog.component';
import { isUndefined, isNullOrUndefined } from 'util';

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

  private pListFilter = '';
  get listFilter(): string {
    return this.pListFilter;
  }
  set listFilter(value: string) {
    // Once linked to the API, should consider using a Search button for performance
    this.pListFilter = value;
    this.filteredPlants = isNullOrUndefined(this.listFilter) ? this.plants : this.performFilter();
  }

  private pTagFilter: string[] = [];
  get tagFilter(): string[] {
    return this.pTagFilter;
  }
  set tagFilter(value: string[]) {
    // Once linked to the API, should consider using a Search button for performance
    this.pTagFilter = value;
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

  onDetailsClicked(plantId: number): void {
    // Opens details dialog
    this.dialog.open(PlantDialogComponent, {
      data: {
        plant: this.plants.find(plant => plant.id === plantId)
      }
    });
  }

  onFavoriteClicked(plantId: number): void {
    const idx = this.plants.findIndex(plant => plant.id === plantId);
    this.plants[idx].favorite = !this.plants[idx].favorite;
  }

  onChangeSelectedTagFilter(value): void {
    this.tagFilter = value.value;
  }

  onTagFilterClicked(chip): void {
    const length = !!chip.selected ? this.pTagFilter.push(chip.value) : this.pTagFilter.splice(this.tagFilter.indexOf(chip.value), 1);
    this.filteredPlants = this.performFilter();
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
    this.filteredPlants = this.plants;
    this.tags = this.tagService.getTags();
    this.primaryTags = this.tagService.getPrimaryTags();
  }
  //#endregion


  //#region  private methods

  arrayContains(array, filterArray): boolean {

    if (isNullOrUndefined(filterArray)) {
      return true;
    }
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
