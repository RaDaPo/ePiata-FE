import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AnnouncementOverviewComponent } from './announcement/announcement-overview/announcement-overview.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout/general-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: 'announcement/:category/:county',
        component: AnnouncementOverviewComponent
      },
      {
        path: 'announcement/:category/:county/:searchTerm',
        component: AnnouncementOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
