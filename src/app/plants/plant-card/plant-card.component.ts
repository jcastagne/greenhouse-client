import { Component, OnInit, Input } from '@angular/core';


import { Plant } from '../plant';

@Component({
  selector: 'gh-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent implements OnInit {

  @Input() plant: Plant;
  defaultImgSource: string = '../assets/images/plant-default.jpg';
  constructor() { }

  ngOnInit() {
    this.plant.imgSource = this.plant.imgSource || this.defaultImgSource;
  }

}
