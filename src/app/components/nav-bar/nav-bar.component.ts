import { Component, Inject, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateServiceService } from '../../services/translate-service.service';
import { DOCUMENT } from '@angular/common';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,TranslatePipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  translateService = inject(TranslateServiceService);
  LocalStorageService =inject(LocalStorageServiceService)
  selectedLang: string = this.LocalStorageService.getItem('lang') || 'en';
  router=inject(Router)
  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log("NavBarComponent  constructor  this.router.url:", this.router.url)
  }

  toggleLanguage() {
    this.selectedLang = this.selectedLang === 'en' ? 'ar' : 'en';
    this.translateService.translationService.currentLang = this.selectedLang;
    this.translateService.change(this.selectedLang);

    this.document.body.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', this.selectedLang);
    document.documentElement.setAttribute('dir', this.selectedLang === 'ar' ? 'rtl' : 'ltr');
    // window.location.reload()
  }

}
