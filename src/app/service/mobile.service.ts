import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  public isMobile = false;

  constructor() {
  }
}