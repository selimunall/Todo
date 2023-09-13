import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoModalComponent } from './todo-modal/todo-modal.component';

@Component({
  standalone: true,
  selector: 'slm-todos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos.component.html',
  imports: [TodoModalComponent]
})
export class TodosComponent {
  @Input() public listHeader?: string;
}
