import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { NgClass, NgIf, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { AnimationDurationsMilliseconds } from 'src/shared/animations/lib/defaults';
import { slideInBottom, slideOutBottom } from 'src/shared/animations/lib/slide';
import { zoomIn, zoomOut } from 'src/shared/animations/lib/zoom';

@Component({
  standalone: true,
  selector: 'slm-dialog-component-service',
  templateUrl: 'dialog.component.html',
  imports: [NgClass, NgIf, NgComponentOutlet,DialogModule],
  animations: [slideInBottom, zoomIn, slideOutBottom, zoomOut]
})
export class DialogComponent {
  public dialogRef = inject(DialogRef);
  public dialogTitle = this.dialogRef.config.data.title;
  public dialogComponent = this.dialogRef.config.data.component;
  public hidden = false;

  public close(): void {
    this.hidden = true;
    setTimeout(() => {
        this.dialogRef.close();
      }, AnimationDurationsMilliseconds.exiting);
  }
}
