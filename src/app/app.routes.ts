import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PartnerComponent } from './pages/partner/partner.component';

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
        path:'contact',
        component:ContactUsComponent
    }
    // {
    //     path:'home/about_us',
    //     component:AboutUsComponent
    // },
    // {
    //     path:'services',
    //     component:ServicesComponent
    // },
    // {
    //     path:'works',
    //     component:WorksComponent
    // },
    // {
    //     path:'partner',
    //     component:PartnerComponent
    // },
    // {
    //     path:'contact_us',
    //     component:ContactUsComponent
    // }
];
