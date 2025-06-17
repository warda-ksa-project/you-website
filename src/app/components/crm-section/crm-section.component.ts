import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-crm-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './crm-section.component.html',
  styleUrl: './crm-section.component.scss'
})
export class CrmSectionComponent {

}
