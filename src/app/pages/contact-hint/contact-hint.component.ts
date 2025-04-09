import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-hint',
  standalone: true,
  imports: [],
  templateUrl: './contact-hint.component.html',
  styleUrl: './contact-hint.component.scss'
})
export class ContactHintComponent {
  private router =inject(Router)
  goToContactUs(){
      this.router.navigateByUrl('/contact')
  }
}
