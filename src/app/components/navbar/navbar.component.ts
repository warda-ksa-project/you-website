import { DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { TranslateServiceService } from '../../services/translate-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-second-navbar',
  standalone: true,
  imports: [TranslatePipe, NgIf , RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  translateService = inject(TranslateServiceService);
  LocalStorageService = inject(LocalStorageServiceService);
  selectedLang: string = this.LocalStorageService.getItem('lang') ?? 'en';
  router = inject(Router);
  translationService = inject(TranslateService);
  isMenuOpen: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document,) {
    this.defaultLang();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    this.selectedLang = this.selectedLang === 'en' ? 'ar' : 'en';
    this.LocalStorageService.setItem('lang', this.selectedLang);
    this.change(this.selectedLang);

    const html = document.getElementsByTagName('html')[0];
    const dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
    html.setAttribute('dir', dir);
    html.setAttribute('lang', this.selectedLang);

    this.document.body.dir = dir;
  }

  change(language: string) {
    this.translationService.use(language);
    localStorage.setItem('lang', language);
  }

  defaultLang() {
    this.selectedLang = this.LocalStorageService.getItem('lang') || 'en';
    this.document.body.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.setAttribute('lang', this.selectedLang);
    this.document.documentElement.setAttribute('dir', this.selectedLang === 'ar' ? 'rtl' : 'ltr');
  }

}
