import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-erb-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './erb-section.component.html',
  styleUrl: './erb-section.component.scss'
})
export class ErbSectionComponent {

}
