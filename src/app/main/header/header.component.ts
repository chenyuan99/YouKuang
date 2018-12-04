import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserInfo} from '../../entity/UserInfo';
import {CollapseService} from '../../service/collapse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  @Input()
  isMobile = false;

  userInfo: UserInfo;

  constructor(private userService: UserService,
              public collapsedService: CollapseService) {
  }

  ngOnInit(): void {
    this.collapsedService.collapse$.subscribe(
      isCollapsed => this.isCollapsed = isCollapsed
    );
    this.userService.userInfo$.subscribe(
      userInfo => {
        this.userInfo = userInfo;
        console.log(this.userInfo);
      }
    );
  }
}
