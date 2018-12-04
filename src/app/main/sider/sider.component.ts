import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../service/collapse.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  constructor(private collapsedService: CollapseService) {
  }

  ngOnInit() {
  }
}
