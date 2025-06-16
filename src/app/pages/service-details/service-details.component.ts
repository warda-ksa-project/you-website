import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { YouAllServicesService } from '../../services/you-all-services.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [TranslatePipe, RouterModule, NgFor, NgIf, NgClass, ServicesComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {

  serviceData!: any;
  mainObjectService = inject(YouAllServicesService);
  route = inject(ActivatedRoute);
  serviceId: any;
  ngOnInit(): void {
    this.serviceId = this.route.snapshot.paramMap.get('id') || '';

    this.mainObjectService.getObjectById(this.serviceId).subscribe(data => {
      this.serviceData = data;
      console.log('Loaded data:', data);
    });
  }

}
