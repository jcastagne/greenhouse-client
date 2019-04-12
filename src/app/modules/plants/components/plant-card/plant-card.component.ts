import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { isUndefined } from 'util';


import { Plant } from '../../shared/plant';
import { Tag } from 'src/app/shared/models/tag.model';

@Component({
  selector: 'gh-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {

  @Input() plant: Plant;
  @Input() primaryTags: Tag[];

  @Output()
  favoriteClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  detailsClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickDetails(): void {
    this.detailsClicked.emit(this.plant.id);
  }

  clickFavorite(): void {
    // this.plant.favorite =! this.plant.favorite;
    this.favoriteClicked.emit(this.plant.id);
  }

  isPrimaryTagSelected(tagId: number): boolean {
    return !isUndefined(this.plant.tags.find(ptag => ptag.id === tagId));
  }

}
