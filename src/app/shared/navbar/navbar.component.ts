import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordPopupComponent } from 'src/app/admin/change-password-popup/change-password-popup.component';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    data: any;
    sessionData:any;
  constructor(public sidebarservice: SidebarService,private router: Router,public dialog: MatDialog,private toaster:ToastrService) { 
     this.sessionData =  sessionStorage.getItem("adminDetail"); 
    this.data = JSON.parse(this.sessionData);
  }     
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {

        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar")
            }), 
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar")
            })
        });

    }
    logout(){
        localStorage.removeItem('adminDetail');
        localStorage.removeItem('role');
        this.toaster.success('Logout Successful')
        this.router.navigate(['headnav/home']);
    }
    changePassword(){
       const dialogAp = this.dialog.open(ChangePasswordPopupComponent,{
           width:'40vw',
           disableClose:true,
           data:null
       });
       dialogAp.afterClosed().subscribe(result => {
       });
    }
}
