import { Injectable, inject } from '@angular/core';
import { ListColors } from '../model/colorType.model';
@Injectable({ providedIn: 'root' })
export class ListService {
  public colors = ListColors;
  public lists = [
    {
      name: 'Personal',
      color: this.colors.RED,
      counter: true,
    },
    {
      name: 'Work',
      color: this.colors.TURQUOISE,
      counter: true,
    },
  ];
}
