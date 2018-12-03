import {Component, HostListener, OnInit} from '@angular/core';
import {USER_INFO} from './DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  title = 'YouKuang';

  isMobile = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(USER_INFO).replace(/_/g, ''));
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = event.target.innerWidth > 600 ? false : true;
  }
}
