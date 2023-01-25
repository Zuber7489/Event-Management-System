import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {MatDialogModule} from '@angular/material/dialog'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ColorSwitcherComponent,
    NgbModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    PerfectScrollbarModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass:'toast-top-right'
      
    })
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ColorSwitcherComponent,
  ],
  providers: [ ],
})

export class SharedModule { }
