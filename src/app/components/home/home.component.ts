import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceWidthService } from 'src/app/services/device-width.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  isSmallScreen : boolean =  true;

  constructor(private deviceWidthService: DeviceWidthService) {
    this.isSmallScreen = this.deviceWidthService.checkDeviceWidth();
    console.log(this.isSmallScreen);
  }

}
