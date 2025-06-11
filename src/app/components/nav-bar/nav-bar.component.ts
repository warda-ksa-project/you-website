import { AfterViewInit, Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateServiceService } from '../../services/translate-service.service';
import { DOCUMENT, NgIf, NgStyle } from '@angular/common';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,TranslatePipe,NgIf, NgStyle],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements AfterViewInit{
    @ViewChild('carousel') carousel!: ElementRef;
navBackGround='assets/images/slider1.svg'
  translateService = inject(TranslateServiceService);
  LocalStorageService =inject(LocalStorageServiceService)
  selectedLang: string = this.LocalStorageService.getItem('lang') ?? 'en';
  router=inject(Router)
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.defaultLang();
  }

  toggleLanguage() {
    this.selectedLang = this.selectedLang === 'en' ? 'ar' : 'en';
    this.LocalStorageService.setItem('lang', this.selectedLang);
    window.location.reload()

  }

  defaultLang() {
    this.selectedLang = this.LocalStorageService.getItem('lang') || 'en';
    this.document.body.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.setAttribute('lang', this.selectedLang);
    this.document.documentElement.setAttribute('dir', this.selectedLang === 'ar' ? 'rtl' : 'ltr');
  }


  ngAfterViewInit() {
    const carouselElement = this.carousel.nativeElement;

    carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
      const activeIndex = event.to;
      console.log('Active slide index:', activeIndex);

      const activeImg: HTMLImageElement | null = carouselElement.querySelector(
        '.carousel-item.active img'
      );
      if (activeImg) {
        console.log('Active image src:', activeImg.src);
        this.navBackGround= activeImg.src
        console.log('Active image alt:', activeImg.alt);
      }
    });
  }
}
