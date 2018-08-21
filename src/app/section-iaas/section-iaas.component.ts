import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-section-iaas',
  templateUrl: './section-iaas.component.html'
})
export class SectionIaasComponent {
  public data: any = "";

  constructor(private dataService: DataService) {
    dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
