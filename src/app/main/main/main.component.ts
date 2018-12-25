import {Component, HostListener, OnInit} from '@angular/core';
import {CollapseService} from '../../service/collapse.service';
import {MobileService} from '../../service/mobile.service';

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
    }

    @HostListener('window:resize', ['$event'])
    private setMobile() {
        this.mobileService.setMobile();
    }
}
