import { Tag } from 'src/app/shared/models/tag.model';

export class Plant {
  id: number;
  commonName: string;
  imgSource: string;
  tags: Tag[];
}
