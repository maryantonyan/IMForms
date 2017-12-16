import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './app.router';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MyFormsComponent } from './components/my-forms/my-forms.component';
import { HeaderComponent } from './components/fragments/header/header.component';
import { SlideBarComponent } from './components/fragments/slide-bar/slide-bar.component';
import { DragulaModule } from 'ng2-dragula';
import { MenuButtonsComponent } from './components/fragments/toolbar/toolbar.component';

import {MdSidenavModule} from '@angular/material';
import { ContextMenuModule } from 'ngx-contextmenu'
import { MdTabsModule } from '@angular/material';
import 'hammerjs';
import { SlideBarService } from './components/fragments/slide-bar/slide-bar.service'
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { DataTableComponent  } from './components/my-forms/data-table/data-table.component'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MdSelectModule, OverlayModule } from '@angular/material';
import {MdPaginatorModule} from '@angular/material';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { Ng2FloatBtnModule } from 'ng2-float-btn';

import { AuthGuard } from './services/_guards/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    CreateFormComponent,
    MyFormsComponent,
    HeaderComponent,
    SlideBarComponent,
    MenuButtonsComponent,
    DataTableComponent 
  ],
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    Ng2FloatBtnModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    MdSidenavModule,
    MdTabsModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    FormsModule,
    MdSelectModule,
    OverlayModule,
    DragulaModule,
   MdPaginatorModule
  ],
  providers: [ SlideBarService, AuthGuard ],
  bootstrap: [AppComponent],
  exports: [CommonModule,MdPaginatorModule,  ReactiveFormsModule, FormsModule, Ng2TableModule,  BrowserAnimationsModule, ContextMenuModule, MdSidenavModule, MdTabsModule, PaginationModule, MdSelectModule, OverlayModule ],
})
export class AppModule { }
