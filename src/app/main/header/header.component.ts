import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserInfo} from '../../entity/UserInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private userService: UserService) {
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
