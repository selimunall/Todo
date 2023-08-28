import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, Input, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListColors } from 'src/app/model/colorType.model';
import { ListService } from 'src/app/state/lists.service';
import { TodoService } from 'src/app/state/todo.service';

@Component({
  standalone: true,
  selector: 'tags-list-form',
  templateUrl: './tags-list-form.component.html',
  imports: [FormsModule, NgClass, ReactiveFormsModule, NgTemplateOutlet, NgFor],
})
export class TagsListFormComponent {
  @Input() public fromTag: Boolean = false;
  public listService = inject(ListService);
  public todoService = inject(TodoService);
  public lists = this.listService.lists;
  public listColors = ListColors;
  public selectedColors = signal<ListColors>(ListColors.RED);

  public listForm = new FormGroup({
    formName: new FormControl(''),
  });
  public changeColor(listColor: ListColors) {
    // event.preventDefault();
    this.selectedColors.set(listColor);
  }

  public createList() {
    if (!this.fromTag) {
      this.listService.addNewList(
        this.listForm.value.formName!,
        this.selectedColors()
      );
    } else {
      this.todoService.addNewTag(
        this.listForm.value.formName!,
        this.selectedColors()
      );
    }
  }
}
