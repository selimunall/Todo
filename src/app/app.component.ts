import { Component } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MenuComponent],
})
export class AppComponent {
  title = 'todo-project';
}
