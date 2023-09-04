import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConditionState } from 'src/app/state/condition.state';

@Component({
  standalone : true,
  selector: 'slm-settings',
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.component.html',
  imports : [NgClass],
  providers: []
})
export class SettingsComponent {
  public state = inject(ConditionState);
}
