import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './headnav/about-us/about-us.component';



import { FullLayoutComponent } from './admin/layouts/full-layout/full-layout.component';

import { HeadnavComponent } from './headnav/headnav.component';
import { HomeComponent } from './headnav/home/home.component';
import { LoginComponent } from './login and signup/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ServicesComponent } from './headnav/services/services.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { SignupComponent } from './login and signup/signup/signup.component';

const routes: Routes = [
  
  // { path: '**',redirectTo: 'sign-in' },
  { path:'', redirectTo:'headnav/home', pathMatch:'full'},
  
  {path:'headnav', component:HeadnavComponent,
children :[
  { path:'home', component: HomeComponent },
  {path:'services',component:ServicesComponent},
  {path:'about-us' , component:AboutUsComponent}
  
  
]
},

  { path:'sign-in', component: LoginComponent },
 {path:'signup', component:SignupComponent},
  { path:'admin', component: FullLayoutComponent,
  // loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  children:Full_ROUTES,canActivate:[AuthGuard]
 },
 
 {path:'navbar',component:NavbarComponent}


 
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
