import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, TranslatePipe, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private translate =inject(TranslateService)
  currentLang=this.translate.currentLang

  services: any = [
    {
      id: 0,
      name: 'services.service_1',
      image: 'assets/images/s-1.svg',
    },
    {
      id: 1,
      name: 'services.service_2',
      image: 'assets/images/s-2.svg',
    },
    {
      id: 2,
      name: 'services.service_3',
      image: 'assets/images/s-3.svg',
    },
    {
      id: 3,
      name: 'services.service_4',
      image: 'assets/images/s-4.svg',
    },
    {
      id: 0,
      name: 'services.service_5',
      image: 'assets/images/s-5.svg',
    },
    {
      id: 1,
      name: 'services.service_6',
      image: 'assets/images/s-6.svg',
    }
  ];

}
