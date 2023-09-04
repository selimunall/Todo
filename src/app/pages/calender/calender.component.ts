import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'calender',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calender.component.html'
})

export class CalenderComponent {
}