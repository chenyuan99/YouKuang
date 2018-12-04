import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {
  private isCollapsed = false;

  constructor() {
  }

  private _collapse$ = new Subject<boolean>();

  get collapse$(): Observable<boolean> {
    return this._collapse$.asObservable();
  }

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.broadCastCollapse();
  }

  private broadCastCollapse() {
    this._collapse$.next(this.isCollapsed);
  }
}
