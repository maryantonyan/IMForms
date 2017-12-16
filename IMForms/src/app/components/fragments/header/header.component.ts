import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlideBarService } from '../slide-bar/slide-bar.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  changeHeader = false;
  isLogin = true;
  isHome = false;
  isCreate = false;
  isForms = false;
  constructor(private router: Router, private slidebarService: SlideBarService
  ) { }


  ngOnInit() {
    this.router.events.subscribe(event => this.modifyHeader(event));
  }

  modifyHeader(location) {
    this.isLogin = (location.url == "/login-register" || location.url == "/");
    this.isHome = (location.url == "/home" || location.url != "/login-register" && location.url != "/create-form" && location.url != "/my-forms" && location.url != "/" );
    this.isCreate = (location.url == "/create-form");
    this.isForms = (location.url == "/my-forms");
  }

  public toggleSidenav() {
    this.changeHeader = !this.changeHeader
    this.slidebarService
      .toggle()
      .then(() => { });
    this.slidebarService.opened = true;
  }

  public sidenavOpened() {
    return this.slidebarService.opened && window.innerWidth < 768;
  }



}
