import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';

@Component({
    standalone: true,
    selector: 'upcoming',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'upcoming.component.html',
    imports: [TodosComponent]
})

export class UpcomingComponent {

}