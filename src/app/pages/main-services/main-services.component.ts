import { Component, inject } from '@angular/core';
import { SecondNavbarComponent } from "../../components/second-navbar/second-navbar.component";
import { TranslatePipe } from '@ngx-translate/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [SecondNavbarComponent, TranslatePipe, NgFor, NgIf, RouterModule],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})

export class MainServicesComponent {
  router =inject(Router)
  tabsList = [
    { id: '1', name: 'development', status: true },
    { id: '2', name: 'hosting', status: false },
    { id: '3', name: 'eCommerce', status: false },
    { id: '4', name: 'more', status: false }
  ];

  selectedCards: any;

  tabOne = [
    { id: 1, img: 'assets/images/services/tab-1-1.svg', title: 'تصميم المواقع', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 2, img: 'assets/images/services/tab-1-2.svg', title: 'تصميم تطبيقات الجوال ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' }
  ];

  tabTwo = [
    { id: 1, img: 'assets/images/services/tab-2-1.svg', title: 'الخادم الخاص ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 2, img: 'assets/images/services/tab-2-2.svg', title: 'إستضافة الويب ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 3, img: 'assets/images/services/tab-2-3.svg', title: 'إدارة السرفرات ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
  ];

  tabThree = [
    { id: 1, img: 'assets/images/services/tab-3-1.svg', title: 'التسويق الإلكتروني ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 2, img: 'assets/images/services/tab-3-2.svg', title: 'خدمات التصميم ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
  ];

  tabFour = [
    { id: 1, img: 'assets/images/services/tab-4-1.svg', title: 'التحليل الفني ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 2, img: 'assets/images/services/tab-4-2.svg', title: 'أنظمة الشركات ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 3, img: 'assets/images/services/tab-4-3.svg', title: 'أختبار البرمجيات ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 4, img: 'assets/images/services/tab-4-4.svg', title: 'إدارة المشاريع  ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 5, img: 'assets/images/services/tab-4-5.svg', title: 'تطوير الأعمال ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },
    { id: 6, img: 'assets/images/services/tab-4-6.svg', title: 'الدعم الفني ', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق' },

  ];

  ngOnInit(): void {
    this.selectedCards = this.tabOne;
  }


  onTabClick(tabId: string) {
    this.tabsList = this.tabsList.map(tab => ({
      ...tab,
      status: tab.id === tabId
    }));

    if (tabId == '1') {
      this.selectedCards = this.tabOne;
    } else if (tabId == '2') {
      this.selectedCards = this.tabTwo;
    } else if (tabId == '3') {
      this.selectedCards = this.tabThree;
    } else {
      this.selectedCards = this.tabFour;
    }
  }

  goToServicesdetails(){
    this.router.navigateByUrl('our-services/details')
  }
}
