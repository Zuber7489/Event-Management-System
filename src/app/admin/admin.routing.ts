import { Routes } from "@angular/router";
// import { AuthGuard } from "../service/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { PaymentComponent } from "./staff/payment/payment.component";
import { StaffComponent } from "./staff/staff.component";

export const ADMIN_ROUTING: Routes=[

    {path:'', redirectTo:'dashboard',pathMatch:'full'},
    // {path:'',loadChildren: ()=> import('./../shared/routes/full-layout.routes').then(m=>m.Full_ROUTES),canActivate:[AuthGuard]},
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:ProfileComponent},
    {path:'staff',loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)},
   
]