import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffComponent } from './staff.component';





const routes = [
    {
        path: '',
        component: StaffComponent,

    },
    { path: 'add-staff', loadChildren: () => import('./add-staff/add-staff.module').then(m => m.AddStaffModule) },
    { path: 'view-staff', loadChildren: () => import('./add-staff/add-staff.module').then(m => m.AddStaffModule) },
    { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
    { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
    
];

@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, ReactiveFormsModule,


    ]
})

export class StaffModule {
}
