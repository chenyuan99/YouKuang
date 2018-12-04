import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {
  public isCollapsed = false;

  constructor() {
  }

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
