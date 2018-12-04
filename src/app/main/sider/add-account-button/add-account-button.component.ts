import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../../service/collapse.service';

@Component({
  selector: 'app-add-account-button',
  templateUrl: './add-account-button.component.html',
  styleUrls: ['./add-account-button.component.css']
})
export class AddAccountButtonComponent implements OnInit {
  constructor(private collapsedService: CollapseService) {
  }

  ngOnInit() {
  }

}
