import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes = [
    {
        path: '',
        component: InvoiceComponent
    },
];

@NgModule({
    declarations: [
        // AddStaffComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
    ]
        
})

export class InvoiceModule {
}
