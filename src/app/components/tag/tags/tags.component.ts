import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TagsListFormComponent } from '../tags-list-form/tags-list-form.component';
import { TagState } from '../tag.state';
@Component({
  standalone: true,
  selector: 'slm-tags',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tags.component.html',
  imports: [NgTemplateOutlet, NgFor, NgClass, TagsListFormComponent],
})
export class TagsComponent {
  public state = inject(TagState);
  public todoService = inject(TodoService);
  private readonly _eRef = inject(ElementRef);
  public addTagButton = signal(true);

  public addNewTag() {}

  public openTagsTag(event: boolean) {
    this.state.tagTagsMenuOpen.set(event);
  }
}
