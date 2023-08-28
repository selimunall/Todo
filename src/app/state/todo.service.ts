import { Injectable } from '@angular/core';
import { ListColors } from '../model/colorType.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  public tags = [
    {
      tagName: 'Important',
      color: ListColors.RED,
    },
    {
      tagName: 'Selim',
      color: ListColors.GREEN,
    },
    {
      tagName: 'Niko',
      color: ListColors.ORANGE,
    },
    {
      tagName: 'Em',
      color: ListColors.PINK,
    },
    {
      tagName: 'Futbol',
      color: ListColors.PURPLE,
    },
  ];
  public todoList = [
    {
      content: 'Wash the dishes',
      tags: [],
      addedList: ['personal', 'work'],
      time: '',
    },
    {
      content: 'Wash the dishes',
      tags: [],
      addedList: ['personal', 'work'],
      time: '',
    },
  ];

  public addNewTag(name: string, color: ListColors) {
    this.tags.push({
      tagName: name[0].toUpperCase() + name.slice(1),
      color: color,
    });
  }
}
