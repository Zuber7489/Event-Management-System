import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
const routes = [
    {
        path: '',
        component: AddStaffComponent
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
        ToastrModule.forRoot({positionClass:'toast-top-right'})
    ]
        
})

export class AddStaffModule {
}
