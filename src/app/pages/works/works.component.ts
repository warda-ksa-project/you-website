import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [NgFor],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  services:any=[
    {
      name:'خدمات التصميم',
      image:'assets/images/icon-service-1.svg'
    },
    {
      name:'التسويق الالكتروني',
           image:'assets/images/icon-service-1.svg'

    },
    {
      name:'تطوير الاعمال',
           image:'assets/images/icon-service-1.svg'

    },
    {
      name:'تصميم تطبيقات الجوال',
           image:'assets/images/icon-service-1.svg'

    }
    , {
      name:'أختبار البرمجيات',
           image:'assets/images/icon-service-1.svg'

    }
    , {
      name:'استشارات تقنية وحلول مبتكرة',
           image:'assets/images/icon-service-1.svg'

    }
  ]
}
