import { Component, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { SlideBarService } from './slide-bar.service';
import { MyFormsComponent } from '../../my-forms/my-forms.component';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.less'],
  inputs: ['forms', 'sharedForms', 'open', 'clicked','saved']
})
export class SlideBarComponent implements OnInit {
  public content: any;
  smallScreen: any;
  isMobile: any = window.innerWidth < 768 ? false : true;
  @ViewChild('sidenav') sidenav: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.configureSideNav();
  }

  configureSideNav() {
    this.smallScreen = window.innerWidth < 768 ? true : false;
    if (this.smallScreen == false ) {
      this.sidenav.mode = "side";
      this.sidenav.opened = true;
    } else if (this.sidenav.mode == "side") {
      this.sidenav.mode = 'over';
      this.sidenav.opened = false;
    }
    return this.smallScreen;
  }


  public constructor(private slidebarService: SlideBarService) {

  }
  ngOnInit() {
    this.slidebarService
      .setSidenav(this.sidenav);

  }

}

