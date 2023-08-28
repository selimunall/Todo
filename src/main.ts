import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './app/layout/layout/layout.component';

bootstrapApplication(AppComponent);

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'upcoming',
      },
      {
        path:''
      },
    ],
  },
];
