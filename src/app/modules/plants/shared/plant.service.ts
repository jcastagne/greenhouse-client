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
        imgSource: null
      },
      {
        id: 4,
        commonName: 'Oranger',
        imgSource: '../assets/images/oranger.jpg'
      },
      {
        id: 5,
        commonName: 'Pommier',
        imgSource: null
      },
      {
        id: 6,
        commonName: 'Tomate',
        imgSource: null
      },
      {
        id: 7,
        commonName: 'Bananier',
        imgSource: null
      },
      {
        id: 8,
        commonName: 'Carotte',
        imgSource: null
      },
      {
        id: 9,
        commonName: 'Cerisier',
        imgSource: null
      },
      {
        id: 10,
        commonName: 'Platane',
        imgSource: null
      },
      {
        id: 11,
        commonName: 'Merisier',
        imgSource: null
      },
      {
        id: 12,
        commonName: 'Cognassier',
        imgSource: null
      },
      {
        id: 13,
        commonName: 'Menthe',
        imgSource: null
      },
    ];
  }
}
