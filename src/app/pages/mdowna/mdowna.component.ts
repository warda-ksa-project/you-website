import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-mdowna',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './mdowna.component.html',
  styleUrl: './mdowna.component.scss'
})
export class MdownaComponent {

}
