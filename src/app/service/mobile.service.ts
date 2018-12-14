import {Injectable, OnInit} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MobileService implements OnInit {
    public isMobile = window.innerWidth <= 900;

    constructor() {
    }

    ngOnInit(): void {
        this.setMobile();
    }

    setMobile() {
        this.isMobile = (<Window>event.target).innerWidth <= 900;
    }

}
