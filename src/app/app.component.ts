import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        document.body.style.backgroundColor = '#f0f2f5';
    }
}
