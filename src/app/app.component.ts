import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LayoutComponent,RouterOutlet],
})
export class AppComponent {
  title = 'todo-project';
}
