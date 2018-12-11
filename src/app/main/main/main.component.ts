import {Component, HostListener, OnInit} from '@angular/core';
import {CollapseService} from '../../service/collapse.service';
import {MobileService} from '../../service/mobile.service';
import {USER_INFO} from '../../entity/DATA';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
