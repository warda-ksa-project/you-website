import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "../services/services.component";
import { ContactHintComponent } from "../contact-hint/contact-hint.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { PartnerComponent } from "../partner/partner.component";
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,WorksComponent, ServicesComponent, ContactHintComponent, AboutUsComponent, PartnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
