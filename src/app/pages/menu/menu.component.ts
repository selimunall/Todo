import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ListComponentsComponent } from 'src/app/components/list-components/list-components.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { ListService } from 'src/app/state/lists.service';
import { ListColors } from 'src/app/model/colorType.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    NgClass,
    NgFor,
    NgTemplateOutlet,
    NgIf,
    TagsComponent,
    ListComponentsComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MenuComponent {
  public isMenuOpen = signal(true);
  public isDropDownOpen = signal(false);
  public listService = inject(ListService);
  public lists = this.listService.lists;
  public listColors = ListColors;
  public selectedColors = signal<ListColors>(ListColors.RED);

  listForm = new FormGroup({
    formName: new FormControl(''),
  });

  public toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  public changeColor(listColor: ListColors) {
    // event.preventDefault();
    this.selectedColors.set(listColor);
  }

  public createList() {
    this.listService.addNewList(
      this.listForm.value.formName!,
      this.selectedColors()
    );
    console.log(this.listForm.value.formName, this.selectedColors());
  }

  public toggleDropDown(event: MouseEvent) {
    event.preventDefault();
    this.isDropDownOpen.set(!this.isDropDownOpen());
  }
}
