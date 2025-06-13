import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, TranslatePipe, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private translate = inject(TranslateService);
  currentLang = this.translate.currentLang;
  route = inject(Router)
  selectedData: any;
  services: any = [
    {
      id: 0,
      name: 'services.service_new_1',
      image: 'assets/images/sv-1.svg',
      showDetails: false,
      details: [
        { id: 0, name: 'services.s1_1' },
        { id: 1, name: 'services.s1_2' },
        {
          id: 2,
          name: 'services.s1_3',
        },
        { id: 3, name: 'services.s1_4' },
        { id: 4, name: 'services.s1_5' },
      ],
    },
    {
      id: 1,
      name: 'services.service_new_2',
      image: 'assets/images/sv-2.svg',
      showDetails: false,
      details: [
        { id: 0, name: 'services.s2_1' },
        { id: 1, name: 'services.s2_2' },
        {
          id: 2,
          name: 'services.s2_3',
        },
        { id: 3, name: 'services.s2_4' },
        { id: 4, name: 'services.s2_5' },
        {
          id: 5,
          name: 'services.s2_6',
        },
      ],
    },
    {
      id: 2,
      name: 'services.service_new_3',
      image: 'assets/images/sv-3.svg',
      showDetails: false,
      details: [
        { id: 0, name: 'services.s3_1' },
        { id: 1, name: 'services.s3_2' },
        {
          id: 2,
          name: 'services.s3_3',
        },
        { id: 3, name: 'services.s3_4' },
        { id: 4, name: 'services.s3_5' },
        {
          id: 5,
          name: 'services.s3_6',
        },
      ],
    },
    {
      id: 3,
      name: 'services.service_new_4',
      image: 'assets/images/sv-4.svg',
      showDetails: false,
      details: [
        { id: 1, name: 'services.s4_1' },
        { id: 2, name: 'services.s4_2' },
        {
          id: 3,
          name: 'services.s4_3',
        },
        { id: 4, name: 'services.s4_4' },
        { id: 5, name: 'services.s4_5' },
      ],
    },
    {
      id: 4,
      name: 'services.service_new_5',
      image: 'assets/images/sv-5.svg',
      showDetails: false,
      details: [
        { id: 1, name: 'services.s4_1' },
        { id: 2, name: 'services.s4_2' },
        {
          id: 3,
          name: 'services.s4_3',
        },
        { id: 4, name: 'services.s4_4' },
        { id: 5, name: 'services.s4_5' },
      ],
    },
    {
      id: 5,
      name: 'services.more_services',
      image: '',
      showDetails: false,
      details: [],
    },
  ];
  // showServiceDetails(id: number) {
  //  this.selectedData= this.services.filter((res: any) => {
  //     if (res.id == id) res.showDetails = true;
  //   });
  // }
  // hideServiceDetails(id: number) {
  //   this.services.map((res: any) => {
  //     if (res.id == id) res.showDetails = false;
  //   });
  // }
  selectedService(id: number) {
    if (id == 5)
      this.route.navigate(['our-services']);
    else
      this.selectedData = this.services[id];
  }
}
