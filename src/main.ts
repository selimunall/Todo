import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { LayoutComponent } from './app/layout/layout/layout.component';
import { AuthLayoutComponent } from './app/layout/auth/auth.component';
import { StickyWallComponent } from './app/pages/sticky-wall/sticky-wall.component';
import { TodayComponent } from './app/pages/today/today.component';
import { CalenderComponent } from './app/pages/calender/calender.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UpcomingComponent } from './app/pages/upcoming/upcoming.componet';
import { DialogService } from './app/components/dialog/dialog.service';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from './app/components/dialog/dialog.component';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'sticky-wall',
        component:  StickyWallComponent,
        providers: [importProvidersFrom(DialogModule), DialogService]
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
    provideAnimations(),
    provideRouter(routes)
  ]
});

