import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  @Input()
  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

}
