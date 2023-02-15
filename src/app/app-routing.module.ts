import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


import { FullLayoutComponent } from './admin/layouts/full-layout/full-layout.component';
import { AboutComponent } from './headnav/about/about.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  // { path: '**',redirectTo: 'sign-in' },
  { path:'', redirectTo:'headnav/home', pathMatch:'full'},
  
  {path:'headnav', component:HeadnavComponent,
children :[
  { path:'home', component: HomeComponent },
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  
  
]
},
{path:'admin-panel',component:AdminPanelComponent},
  { path:'sign-in', component: LoginComponent },
 {path:'signup', component:SignupComponent},
  { path:'admin', component: FullLayoutComponent,
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  // children:Full_ROUTES,canActivate:[AuthGuard]
 },
 
 {path:'navbar',component:NavbarComponent}


 
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
