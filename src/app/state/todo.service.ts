import { Injectable } from '@angular/core';
import { ListColors } from '../model/colorType.model';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  public tags = [
    {
      tagName: 'Important',
      color: ListColors.RED,
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
}
