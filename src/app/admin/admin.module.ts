import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTING } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table'
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog'
import { ChangePasswordPopupComponent } from './change-password-popup/change-password-popup.component';
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { PaymentComponent } from './staff/payment/payment.component';
import { InvoiceComponent } from './staff/invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTING),
    FormsModule,
    ReactiveFormsModule,
    SharedModule, 
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [
    ContentLayoutComponent,
    DashboardComponent,
    ChangePasswordPopupComponent,
    StaffComponent,
    AddStaffComponent,
   PaymentComponent,
   InvoiceComponent,
   ProfileComponent,
   

  ],
 
})
export class AdminModule { }
