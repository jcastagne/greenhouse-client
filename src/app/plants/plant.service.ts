import { Injectable } from '@angular/core';

import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  getPlants(): Plant[] {
    return [
      {
        id: 1,
        commonName: 'Lavande',
        imgSource: '../assets/images/lavande.jpg'
      },
      {
        id: 2,
        commonName: 'Rosier',
        imgSource: '../assets/images/rosier.jpg'
      },
      {
        id: 3,
        commonName: 'Abricotier',
        imgSource: ''
      },
      {
        id: 4,
        commonName: 'Oranger',
        imgSource: '../assets/images/oranger.jpg'
      }
    ];
  }
 }
