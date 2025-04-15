import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageServiceService } from './services/local-storage-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YOU-WebSite';
  defaultLang:string=''
  LocalStorageService =inject(LocalStorageServiceService)
  
  constructor(private translate: TranslateService) {
    this.defaultLang =this.LocalStorageService.getItem('lang') ?? 'en';
    translate.setDefaultLang(this.defaultLang); // Optional
    translate.use(this.defaultLang); // Required
  }
}
