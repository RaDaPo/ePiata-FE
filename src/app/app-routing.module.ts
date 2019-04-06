import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AnnouncementOverviewComponent } from './announcement/announcement-overview/announcement-overview.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout/general-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementComponent } from './announcement/announcement/announcement.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout/user-layout.component';
import { UserAnnouncementsComponent } from './user/user-announcements/user-announcements.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'announcements/:category/:county',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        component: AnnouncementOverviewComponent
      }
    ]
  },
  {
    path: 'announcements/:category/:county/:searchTerm',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        component: AnnouncementOverviewComponent
      }
    ]
  },
  {
    path: 'announcements/:category/:county/:searchTerm/:id',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        component: AnnouncementComponent
      }
    ]
  },
  {
    path: 'user/:id',
    redirectTo: 'user/:id/announcements'
  },
  {
    path: 'user/:id/announcements',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UserAnnouncementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
