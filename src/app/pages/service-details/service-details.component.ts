import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SecondNavbarComponent } from '../../components/second-navbar/second-navbar.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [TranslatePipe,SecondNavbarComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {

}
