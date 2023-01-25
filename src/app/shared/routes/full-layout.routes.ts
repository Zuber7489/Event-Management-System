import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./../../admin/admin.module').then(m => m.AdminModule)
    },
    // {
    //     path:'',
    //     redirectTo:'dashboard',
    //     pathMatch:'full'
      
    // }
];