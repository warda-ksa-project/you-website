import { Component, Inject, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateServiceService } from '../../services/translate-service.service';
import { DOCUMENT, NgIf } from '@angular/common';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,TranslatePipe,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
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
}
