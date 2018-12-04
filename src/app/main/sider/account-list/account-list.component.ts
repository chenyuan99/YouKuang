import {Component, OnInit} from '@angular/core';
import {MyAccount} from '../../../entity/MyAccount';
import {AccountService} from '../../../service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  private accountList: MyAccount[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getAllAccount().subscribe(
      value => this.accountList = value
    );
  }

}
