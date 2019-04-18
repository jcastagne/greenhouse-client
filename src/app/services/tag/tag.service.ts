import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }
  tags: Tag[] = [
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
    },
    {
      id: 6,
      value: 'Permanent looong value',
      primary: true
    },
    {
      id: 4,
      value: 'Violet',
      primary: false
    },
    {
      id: 5,
      value: 'Herbe',
      primary: false
    }
  ];

  getTags(): Tag[] {
    return this.tags;
  }

  getPrimaryTags(): Tag[] {
    return this.tags.filter(tag => tag.primary);
  }
}
