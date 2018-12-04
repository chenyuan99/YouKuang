import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserInfo} from '../../entity/UserInfo';
import {CollapseService} from '../../service/collapse.service';
import {MobileService} from '../../service/mobile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private userService: UserService,
              public collapsedService: CollapseService,
              public mobileService: MobileService) {
  }

  ngOnInit(): void {
    this.userService.userInfo$.subscribe(
      userInfo => {
        this.userInfo = userInfo;
        console.log(this.userInfo);
      }
    );
  }
}
