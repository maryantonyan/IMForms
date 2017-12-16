import { Injectable } from '@angular/core';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

@Injectable()
export class SlideBarService {
  private sidenav: MdSidenav;
  public opened: boolean;

  public setSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
    this.opened = this.sidenav.opened;
  }

  public open(): Promise<MdSidenavToggleResult> {

    this.opened = !this.sidenav.opened;
    return this.sidenav.open();
  }


  public close(): Promise<MdSidenavToggleResult> {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<MdSidenavToggleResult> {
    return this.sidenav.toggle(isOpen);
  }
}
