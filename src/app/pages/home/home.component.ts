import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "../services/services.component";
import { ContactHintComponent } from "../contact-hint/contact-hint.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { PartnerComponent } from "../partner/partner.component";
import { WorksComponent } from '../works/works.component';
import { MdownaComponent } from "../mdowna/mdowna.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, WorksComponent, ServicesComponent, ContactHintComponent, AboutUsComponent, PartnerComponent, MdownaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
