import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListColors } from 'src/app/model/colorType.model';
import { ListService } from 'src/app/services/lists.service';
import { TodoService } from 'src/app/services/todo.service';
import { TagState } from '../tag.state';

@Component({
  standalone: true,
  selector: 'tags-list-form',
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './tags-list-form.component.html',
  imports: [FormsModule, NgClass, ReactiveFormsModule, NgTemplateOutlet, NgFor],
})
export class TagsListFormComponent {
  @Input() fromTag: boolean = false;
  public listService = inject(ListService);
  public todoService = inject(TodoService);
  public state = inject(TagState);
  public lists = this.listService.lists;
  public listColors = ListColors;
  private readonly _eRef = inject(ElementRef);
  public selectedColors = signal<ListColors>(ListColors.RED);

  @HostListener('document:click',['$event'])
  public outClick($event : MouseEvent){
    if(this.fromTag && !this._eRef.nativeElement.contains($event.target) && this.state.tagTagsMenuOpen()){
      console.log('a')
    } else if(!this.fromTag && !this._eRef.nativeElement.contains($event.target) && this.state.listTagsMenuOpen()){
      console.log('b');
    }
  }



  public listForm = new FormGroup({
    formName: new FormControl(''),
  });
  public changeColor(listColor: ListColors) {
    // event.preventDefault();
    this.selectedColors.set(listColor);
  }

  public createList() {
    if (!this.state.fromTag) {
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
