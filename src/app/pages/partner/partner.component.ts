import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent {
  partners:any=[
    {
      image:'assets/images/matlop-logo.svg'
    },
    {
      image:'assets/images/Logo_3.svg'
    },
    {
      image:'assets/images/Logo_2.svg'
    },
    {
      image:'assets/images/Logo_1.svg'
    },
    {
      image:'assets/images/Logo_2.svg'
    },
    {
      image:'assets/images/Logo_1.svg'
    }
  ]
}
