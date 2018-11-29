import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-account-button',
  templateUrl: './add-account-button.component.html',
  styleUrls: ['./add-account-button.component.css']
})
export class AddAccountButtonComponent implements OnInit {
  @Input()
  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

}
