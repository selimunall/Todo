import { DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'add-sticky-popup',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'add-sticky-popup.component.html',
    imports: [DialogModule]
})

export class AddStickyComponent {
}