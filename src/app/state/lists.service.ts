import { Injectable, inject } from '@angular/core';
import { ListColors } from '../model/colorType.model';
import { ListType } from '../model/listType.model';

@Injectable({ providedIn: 'root' })
export class ListService {
  public colors = ListColors;
  public lists: ListType[] = [
    {
      name: 'Personal',
      color: this.colors.RED,
      counter: true,
      counterValue: 9,
    },
    {
      name: 'Work',
      color: this.colors.TURQUOISE,
      counter: true,
      counterValue: 0,
    },
  ];

  public addNewList(name: string, color: ListColors): void {
    this.lists.push({ name: name, color: color });
  }
}
