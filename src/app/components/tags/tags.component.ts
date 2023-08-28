import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, Input, inject, signal } from '@angular/core';
import { ListComponentsComponent } from '../list-components/list-components.component';
import { TodoService } from 'src/app/state/todo.service';
import { TagsListFormComponent } from '../tags-list-form/tags-list-form.component';

@Component({
  standalone: true,
  selector: 'tags',
  templateUrl: './tags.component.html',
  imports: [NgTemplateOutlet, NgFor, NgClass, TagsListFormComponent],
})
export class TagsComponent {
  @Input() public isMenuOpen = false;
  public todoService = inject(TodoService);
  public addTagButton = signal(true);
  @HostListener('document:click', ['$event'])
  public outsideClick(event: MouseEvent) {
    console.log(event);
  }

  public addNewTag() {}

  public openForm() {
    this.addTagButton.set(!this.addTagButton());
  }
}
