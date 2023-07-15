import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceWidthService {
  private isSmallScreen: boolean = true;
  constructor() {
    if(window.innerWidth>768)
    this.isSmallScreen= false;
  }

  checkDeviceWidth(){
    return this.isSmallScreen;
  }

}
