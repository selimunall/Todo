import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'src/app/pages/menu/menu.component';
import { ConditionState } from 'src/app/state/condition.state';

@Component({
    standalone: true,
    selector: 'app-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout.component.html',
    imports: [MenuComponent, RouterOutlet, NgClass]
})
export class LayoutComponent {
    public state = inject(ConditionState);
}
