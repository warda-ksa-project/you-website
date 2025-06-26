import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mdowna',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './mdowna.component.html',
  styleUrl: './mdowna.component.scss'
})
export class MdownaComponent {
 langService=inject(TranslateService)
 
}
