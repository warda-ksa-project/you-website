import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { YouAllServicesService } from '../../services/you-all-services.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ServicesComponent } from "../services/services.component";
import { CrmSectionComponent } from "../../components/crm-section/crm-section.component";
import { ErbSectionComponent } from "../../components/erb-section/erb-section.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [TranslatePipe, RouterModule, NgFor, NgIf, NgClass, ServicesComponent, CrmSectionComponent, ErbSectionComponent],
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
