import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'slm-todo-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-modal.component.html',
})
export class TodoModalComponent {
  @Input() public contextHeader!:string;
}
