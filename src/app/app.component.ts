import {Component, OnInit} from '@angular/core';
import {USER_INFO} from './DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  title = 'YouKuang';

  constructor() {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(USER_INFO).replace(/_/g, ''));

  }
}
