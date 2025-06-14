import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [TranslatePipe,NavbarComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {

}
