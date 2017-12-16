import { Component, OnInit, ViewChild } from '@angular/core';
import { Tab } from './tabs';
import { SlideBarComponent } from '../fragments/slide-bar/slide-bar.component';
import { SlideBarService } from '../fragments/slide-bar/slide-bar.service';
import { TableData } from './table-data';
import { Ng2FloatBtnComponent, Ng2FloatBtn } from 'ng2-float-btn';

@Component({
  selector: 'my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['my-forms.component.less', '../fragments/slide-bar/slide-bar.component.less']

})

export class MyFormsComponent implements OnInit {
source: Array<Object>;
  selected: any;
  myForm: any[] = [];
  sharedForm: any[] = [];
  saved: any[] = [];
  data: any;
  isActive = false;
  tabs: Tab[] = [];
  clicked: boolean;
  showArea = false;
  direction: string;
  buttons: Array<Ng2FloatBtn>;
  constructor(private slidebarService: SlideBarService) { 
    this.source = TableData;
    for (let i = 0; i < this.source.length; ++i) {
          if (this.source[i]['owner'] !== 'me') {
              this.sharedForm.push(this.source[i]);
          } else if (this.source[i]['status'] == 'saved') {
              this.saved.push(this.source[i]);
          } else {
              this.myForm.push(this.source[i]);
          }
    }
    this.direction = 'left';
    this.buttons = [
      {
        color: 'primary',
        iconName: 'assessment',
        onClick: () => {
          alert('buton 1 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'save',
        onClick: () => {
          alert('buton 2 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'delete',
        onClick: () => {
          alert('buton 3 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'message',
        onClick: () => {
          alert('buton 4 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'edit',
        onClick: () => {
          alert('buton 5 clicked');
        }
      }
    ]
  }

  ngOnInit(){}

  remove(tab) {
    const index: number = this.tabs.indexOf(tab);

    if (index !== -1) {
      this.tabs.splice(index, 1);
    }
  }

  work (item) {
    if (item.status == "saved") {
        alert("here will be edit functionality");
    } else {
            console.log("ere");
        this.addTab(item);
    }

    if (window.innerWidth < 768) {
        this.closeSidenav();
    }
  }



  addTab(item) {

    const tab = new Tab();
    tab.title = item.name;
    tab.data = item.data;
    tab.owner = item.owner;
    this.clicked = true;
    this.showArea = true;
    if (this.tabs) {
      for (let i = 0; i < this.tabs.length; ++i) {
        if (this.tabs[i].title === tab.title && this.tabs[i].owner === tab.owner) {
          this.selected = i;
          this.isActive = true;
          break;
        }
      }
    
    }
    if (false === this.isActive) {
      this.tabs.push(tab);
      this.selected = this.tabs.length;
    }

    this.isActive = false;
    }

  check() {
    return (window.innerWidth < 768) && this.slidebarService.opened == true;
  }

  public closeSidenav() {

    this.slidebarService
      .toggle()

      .then(() => { });
    setTimeout(() => this.slidebarService.opened = false, 360);
  }
  close () {
  if (this.check()) {
    this.closeSidenav();
  }
  }
}


