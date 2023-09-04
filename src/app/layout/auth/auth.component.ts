import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'auth-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'auth.component.html',
    imports: [],
    providers: []
})

export class AuthLayoutComponent {

}