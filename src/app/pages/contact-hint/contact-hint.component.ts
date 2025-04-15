import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-hint',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-hint.component.html',
  styleUrl: './contact-hint.component.scss'
})
export class ContactHintComponent {

}
