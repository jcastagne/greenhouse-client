import { Injectable } from '@angular/core';

import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  defaultImgSource = 'https://picsum.photos/400/300/?random';
  demoPlants: Plant[] =
    [
      {
        id: 1,
        commonName: 'Lavande',
        imgSource: '../assets/images/lavande.jpg',
        tags: [
          {
            id: 2,
            value: 'Médicinal',
            primary: true
          },
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          },
          {
            id: 4,
            value: 'Violet',
            primary: false
          },
        ],
        favorite: true
      },
      {
        id: 2,
        commonName: 'Rosier',
        imgSource: '../assets/images/rosier.jpg',
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          },
          {
            id: 2,
            value: 'Médicinal',
            primary: true
          },
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          }
        ],
        favorite: true
      },
      {
        id: 3,
        commonName: 'Abricotier',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 4,
        commonName: 'Oranger',
        imgSource: '../assets/images/oranger.jpg',
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 5,
        commonName: 'Pommier',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 6,
        commonName: 'Tomate',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: true
      },
      {
        id: 7,
        commonName: 'Bananier',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 8,
        commonName: 'Carotte',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 9,
        commonName: 'Cerisier',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          },
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 10,
        commonName: 'Platane',
        imgSource: null,
        tags: [
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          }
        ],
        favorite: true
      },
      {
        id: 11,
        commonName: 'Merisier',
        imgSource: null,
        tags: [
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          }
        ],
        favorite: true
      },
      {
        id: 12,
        commonName: 'Cognassier',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          },
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          }
        ],
        favorite: false
      },
      {
        id: 13,
        commonName: 'Menthe',
        imgSource: null,
        tags: [
          {
            id: 1,
            value: 'Comestible',
            primary: true
          },
          {
            id: 2,
            value: 'Médicinal',
            primary: true
          },
          {
            id: 5,
            value: 'Herbe',
            primary: false
          },
        ],
        favorite: false
      },
      {
        id: 1,
        commonName: 'Pin',
        imgSource: '../assets/images/pin.jpg',
        tags: [
          {
            id: 2,
            value: 'Médicinal',
            primary: true
          },
          {
            id: 3,
            value: 'Décoratif',
            primary: true
          },
          {
            id: 6,
            value: 'Permanent',
            primary: true
          },
        ],
        favorite: true
      },
    ];
  getPlants(): Plant[] {
    this.demoPlants.forEach(plant => {
      plant.imgSource = plant.imgSource || this.defaultImgSource;
    });
    return this.demoPlants;
  }

  getPlant(id): Plant {
    return this.demoPlants.find(plant => plant.id === id);
  }
}
