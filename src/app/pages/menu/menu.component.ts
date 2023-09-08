import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ListComponentsComponent } from 'src/app/components/list-components/list-components.component';
import { TagsComponent } from 'src/app/components/tag/tags/tags.component'; 
import { ListService } from 'src/app/services/lists.service';
import { ListColors } from 'src/app/model/colorType.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
// import { TagsListFormComponent } from 'src/app/components/tag/tags-list-form/tags-list-form.component';
import { TagState } from 'src/app/components/tag/tag.state';
import { ConditionState} from 'src/app/state/condition.state';
import { SettingsComponent } from '../settings/settings.component';
import { RouterLink } from '@angular/router';
import { TagsListFormComponent } from "../../components/tag/tags-list-form/tags-list-form.component";
@Component({
    standalone: true,
    selector: 'app-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        SettingsComponent,
        RouterLink,
        TagsListFormComponent
    ]
})
export class MenuComponent  {
  public state = inject(ConditionState);
  public listService = inject(ListService);
  public lists = this.listService.lists;
  public listColors = ListColors;
  public selectedColors = signal<ListColors>(ListColors.RED);
  public tagState = inject(TagState);

  listForm = new FormGroup({
    formName: new FormControl(''),
  });

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

  public openListTags() {
    this.tagState.openListTag(!this.tagState.listTagsMenuOpen());
  }


}
