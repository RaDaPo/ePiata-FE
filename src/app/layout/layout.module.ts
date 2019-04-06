import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout/auth-layout.component';
import { GeneralLayoutComponent } from './general-layout/general-layout/general-layout.component';
import { GeneralLayoutHeaderComponent } from './general-layout/general-layout-header/general-layout-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from 'ng-custom-select';
import { UserLayoutComponent } from './user-layout/user-layout/user-layout.component';
import { UserLayoutHeaderComponent } from './user-layout/user-layout-header/user-layout-header.component';
import { UserLayoutSidebarComponent } from './user-layout/user-layout-sidebar/user-layout-sidebar.component';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        AuthLayoutComponent,
        GeneralLayoutComponent,
        GeneralLayoutHeaderComponent,
        UserLayoutComponent,
        UserLayoutHeaderComponent,
        UserLayoutSidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgSelectModule
    ]
})
export class LayoutModule { }
