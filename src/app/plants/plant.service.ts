import { Injectable } from '@angular/core';

import { IPlant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  getPlants(): IPlant[] {
    return [
      {
        id: 1,
        commonName: 'Lavandier'
      },
      {
        id: 2,
        commonName: 'Rosier'
      },
      {
        id: 3,
        commonName: 'Abricotier'
      },
      {
        id: 4,
        commonName: 'Oranger'
      }
    ];
  }
 }
