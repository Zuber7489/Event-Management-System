import { Routes } from "@angular/router";
// import { AuthGuard } from "../service/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventAvailableComponent } from "./event-available/event-available.component";
import { PlanComponent } from "./plan/plan.component";
import { ProfileComponent } from "./profile/profile.component";
import { PaymentComponent } from "./staff/payment/payment.component";
import { StaffComponent } from "./staff/staff.component";
import { UserManagementComponent } from "./user-management/user-management.component";

export const ADMIN_ROUTING: Routes=[

    // {path:'', redirectTo:'profile',pathMatch:'full'},
    // {path:'',loadChildren: ()=> import('./../shared/routes/full-layout.routes').then(m=>m.Full_ROUTES),canActivate:[AuthGuard]},
    {path:'event-available',component:EventAvailableComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:ProfileComponent},
    {path:'user-management',component:UserManagementComponent},
    {path:'staff',loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)},
    {path:'plan',component:PlanComponent},
]