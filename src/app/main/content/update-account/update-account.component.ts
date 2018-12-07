import {Component, OnInit} from '@angular/core';
import {MobileService} from '../../../service/mobile.service';

@Component({
    selector: 'app-update-account',
    templateUrl: './update-account.component.html',
    styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
    drawerIsVisible = false;

    constructor(public mobileService: MobileService) {
    }

    ngOnInit() {
    }

    closeDrawer() {
        this.drawerIsVisible = false;
    }

    openDrawer() {
        this.drawerIsVisible = true;
    }
}
