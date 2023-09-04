import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { LayoutComponent } from './app/layout/layout/layout.component';
import { AuthLayoutComponent } from './app/layout/auth/auth.component';
import { StickyWallComponent } from './app/pages/sticky-wall/sticky-wall.component';
import { TodayComponent } from './app/pages/today/today.component';
import { CalenderComponent } from './app/pages/calender/calender.component';
import { UpcomingComponent } from './app/pages/upcoming/upcoming.componet';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'upcoming',
      },
      {
        path:''
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [true],
    children: [
      {
        path: 'sticky-wall',
        component:  StickyWallComponent
      },
      {
        path: 'today',
        component: TodayComponent,

      },
      {
        path: 'calender',
        component: CalenderComponent,

      },
      {
        path: 'upcoming',
        component: UpcomingComponent,

      }
    ]
  }
];

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes)
  ]
});

