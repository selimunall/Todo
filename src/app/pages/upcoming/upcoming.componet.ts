import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'upcoming',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'upcoming.component.html'
})

export class UpcomingComponent {

}