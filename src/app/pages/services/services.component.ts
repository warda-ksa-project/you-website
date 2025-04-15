import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: any = [
    {
      name: 'services.design_services',
      image: 'assets/images/icon-service-1.svg'
    },
    {
      name: 'services.d_marketing',
      image: 'assets/images/icon-service-1.svg'

    },
    {
      name: 'services.development',
      image: 'assets/images/icon-service-1.svg'

    },
    {
      name: 'services.mobile_design',
      image: 'assets/images/icon-service-1.svg'

    }
    , {
      name: 'services.program_testing',
      image: 'assets/images/icon-service-1.svg'

    }
    , {
      name: 'services.solution',
      image: 'assets/images/icon-service-1.svg'

    }
  ]
}
