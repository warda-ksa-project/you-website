import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainServicesComponent } from './pages/main-services/main-services.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'our-services',
        component: MainServicesComponent,
    },
    {
        path: 'our-services/details',
        component: ServiceDetailsComponent
    }
];
