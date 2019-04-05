import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout/auth-layout.component';
import { GeneralLayoutComponent } from './general-layout/general-layout/general-layout.component';
import { GeneralLayoutHeaderComponent } from './general-layout/general-layout-header/general-layout-header.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    AuthLayoutComponent,
    GeneralLayoutComponent,
    GeneralLayoutHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
