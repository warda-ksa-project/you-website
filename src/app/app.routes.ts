import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainServicesComponent } from './pages/main-services/main-services.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent
    },
         {
        path:'our-services',
        component:MainServicesComponent
    },
   ];
