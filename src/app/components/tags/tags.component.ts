import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponentsComponent } from '../list-components/list-components.component';

@Component({
  standalone: true,
  selector: 'tags',
  templateUrl: './tags.component.html',
  imports: [NgTemplateOutlet],
})
export class TagsComponent {}
