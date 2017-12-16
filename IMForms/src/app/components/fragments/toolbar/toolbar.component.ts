import { Component, OnInit } from '@angular/core';
import { Ng2FloatBtnComponent, Ng2FloatBtn } from 'ng2-float-btn';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  inputs: ['buttons','direction']
})
export class MenuButtonsComponent implements OnInit {

  mainButton: Ng2FloatBtn;
  constructor() {

    this.mainButton = {
        color: 'primary',
        iconName: 'list'
      };
  }
  ngOnInit() {
  }

}
