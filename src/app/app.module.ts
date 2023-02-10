import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { UiSwitchModule } from 'ngx-ui-switch';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'

import * as $ from 'jquery';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FullLayoutComponent } from './admin/layouts/full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

import { HeadnavComponent } from "./headnav/headnav.component";
import { SignupComponent } from './signup/signup.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FullLayoutComponent,
        HomeComponent,
        ServicesComponent,
        HeadnavComponent,
        SignupComponent,
    ],
    providers: [
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatCardModule,
        MatDialogModule,
        SharedModule,
        HttpClientModule,
        NgbModule,
        ToastrModule.forRoot({
            
            positionClass: 'toast-top-right'
        }),
        UiSwitchModule,
        PerfectScrollbarModule
        
        
    ]
})
export class AppModule { }
