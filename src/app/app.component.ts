import {Component, HostListener, OnInit} from '@angular/core';
import {USER_INFO} from './entity/DATA';
import {CollapseService} from './service/collapse.service';
import {MobileService} from './service/mobile.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'YouKuang';

    constructor(public collapsedService: CollapseService,
                public mobileService: MobileService) {
    }

    ngOnInit(): void {
        console.log(JSON.stringify(USER_INFO).replace(/_/g, ''));
    }

    @HostListener('window:resize', ['$event'])
    private setMobile() {
        this.mobileService.setMobile();
    }
}
