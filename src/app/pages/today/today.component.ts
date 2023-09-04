import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'today',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'today.component.html',
    imports: [],
    providers: []
})

export class TodayComponent {
}