import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {AccountItem} from '../../../entity/AccountItem';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-account-content',
  templateUrl: './account-content.component.html',
  styleUrls: ['./account-content.component.css']
})
export class AccountContentComponent implements OnInit {
  private accountItemList: AccountItem[] = [];

  constructor(private accountService: AccountService,
              private routerService: Router) {
  }

  ngOnInit() {
    this.routerService.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => this.accountService.getAccountContentById(this.parseIdFromURL(this.routerService.url))
    );
  }

  private parseIdFromURL(url: string): number {
    // todo
    return 1;
  }

}
