import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { NavbarModule } from './../../components/navbar/navbar.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavbarModule,
    SidebarModule,
    MatSidenavModule,
    MatProgressBarModule,
  ],
})
export class AdminModule {}
