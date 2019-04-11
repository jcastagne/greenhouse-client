import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  isPrimaryTagSelected(tagId: number): boolean {
    return !isUndefined(this.plant.tags.find(ptag => ptag.id === tagId));
  }

}
