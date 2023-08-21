import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ListComponentsComponent } from 'src/app/components/list-components/list-components.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { ListService } from 'src/app/state/lists.service';

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
  ],
})
export class MenuComponent {
  isMenuOpen = signal(true);
  public listService = inject(ListService);
  public lists = this.listService.lists;

  public toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
