import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementOverviewComponent } from './announcement-overview/announcement-overview.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AnnouncementOverviewComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AnnouncementModule { }
