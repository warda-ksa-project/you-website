import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [ TranslatePipe, NgFor, RouterModule],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})

export class MainServicesComponent {
  router =inject(Router)
  tabsList = [
    { id: '1', name: 'main_services.tab_1', status: true },
    { id: '2', name: 'main_services.tab_2', status: false },
    { id: '3', name: 'main_services.tab_3', status: false },
    { id: '4', name: 'main_services.tab_4', status: false }
  ];

  selectedCards: any;

 tabOne = [
  {
    id: 1,
    serviceId: 1,
    img: 'assets/images/services/tab-1-1.svg',
    title: 'main_services.tab1_card1_title',
    desc: 'main_services.tab1_card1_desc'
  },
  {
    id: 2,
    serviceId: 2,
    img: 'assets/images/services/tab-1-2.svg',
    title: 'main_services.tab1_card2_title',
    desc: 'main_services.tab1_card2_desc'
  }
];

tabTwo = [
  {
    id: 1,
    serviceId: 3,
    img: 'assets/images/services/tab-2-1.svg',
    title: 'main_services.tab2_card1_title',
    desc: 'main_services.tab2_card1_desc'
  },
  {
    id: 2,
    serviceId: 4,
    img: 'assets/images/services/tab-2-2.svg',
    title: 'main_services.tab2_card2_title',
    desc: 'main_services.tab2_card2_desc'
  },
  {
    id: 3,
    serviceId: 5,
    img: 'assets/images/services/tab-2-3.svg',
    title: 'main_services.tab2_card3_title',
    desc: 'main_services.tab2_card3_desc'
  }
];

tabThree = [
  {
    id: 1,
    serviceId: 6,
    img: 'assets/images/services/tab-3-1.svg',
    title: 'main_services.tab3_card1_title',
    desc: 'main_services.tab3_card1_desc'
  },
  {
    id: 2,
    serviceId: 7,
    img: 'assets/images/services/tab-3-2.svg',
    title: 'main_services.tab3_card2_title',
    desc: 'main_services.tab3_card2_desc'
  }
];

tabFour = [
  {
    id: 1,
    serviceId: 8,
    img: 'assets/images/services/tab-4-1.svg',
    title: 'main_services.tab4_card1_title',
    desc: 'main_services.tab4_card1_desc'
  },
  {
    id: 2,
    serviceId: 9,
    img: 'assets/images/services/tab-4-2.svg',
    title: 'main_services.tab4_card2_title',
    desc: 'main_services.tab4_card2_desc'
  },
  {
    id: 3,
    serviceId: 10,
    img: 'assets/images/services/tab-4-3.svg',
    title: 'main_services.tab4_card3_title',
    desc: 'main_services.tab4_card3_desc'
  },
  {
    id: 4,
    serviceId: 11,
    img: 'assets/images/services/tab-4-4.svg',
    title: 'main_services.tab4_card4_title',
    desc: 'main_services.tab4_card4_desc'
  },
  {
    id: 5,
    serviceId: 12,
    img: 'assets/images/services/tab-4-5.svg',
    title: 'main_services.tab4_card5_title',
    desc: 'main_services.tab4_card5_desc'
  },
  {
    id: 6,
    serviceId: 13,
    img: 'assets/images/services/tab-4-6.svg',
    title: 'main_services.tab4_card6_title',
    desc: 'main_services.tab4_card6_desc'
  }
];


  ngOnInit(): void {
    this.selectedCards = this.tabOne;
  }

  onTabClick(tabId: string) {
    this.tabsList = this.tabsList.map(tab => ({
      ...tab,
      status: tab.id === tabId
    }));

    switch (tabId) {
      case '1':
        this.selectedCards = this.tabOne;
        break;
      case '2':
        this.selectedCards = this.tabTwo;
        break;
      case '3':
        this.selectedCards = this.tabThree;
        break;
      case '4':
        this.selectedCards = this.tabFour;
        break;
    }
  }

  goToServicesdetails(serviceId: any){
    console.log('Service ID:', serviceId);
    this.router.navigate(['our-services/details' , serviceId])
  }
}
