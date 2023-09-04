import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'src/app/pages/menu/menu.component';
import { ConditionState } from 'src/app/state/condition.state';
import { SettingsComponent } from "../../pages/settings/settings.component";

@Component({
    standalone: true,
    selector: 'app-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout.component.html',
    imports: [MenuComponent, RouterOutlet]
})
export class LayoutComponent {
}
