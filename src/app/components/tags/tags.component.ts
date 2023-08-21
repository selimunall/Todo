import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'tags',
  templateUrl: './tags.component.html',
  imports: [NgTemplateOutlet],
})
export class TagsComponent {}
