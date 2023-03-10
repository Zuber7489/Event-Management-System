import { Component, OnInit } from '@angular/core';
import {  AdminRoutes, ROUTES } from './sidebar-routes.config';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SidebarService } from "../sidebar/sidebar.service";

import * as $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public menuItems: any = [];
    NonStaffRoutes_menus:boolean=true;

    constructor(public sidebarservice: SidebarService, private router: Router) {

        router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }
            let width: any = $(window).width();
            if (event instanceof NavigationEnd && width < 1025 && (document.readyState == 'complete' || false)) {
                this.toggleSidebar();
                // Hide loading indicator
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });

    }


    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

        if ($(".wrapper").hasClass("nav-collapsed")) {
            // unpin sidebar when hovered
            $(".wrapper").removeClass("nav-collapsed");
            $(".sidebar-wrapper").unbind("hover");
            $("#lg-logo").show();
            $("#sm-logo").hide();
        } else {
            $("#lg-logo").hide();
            $("#sm-logo").show();
            $(".wrapper").addClass("nav-collapsed");
            $(".sidebar-wrapper").hover(
                function () {
                    $(".wrapper").addClass("sidebar-hovered");
                },
                function () {
                    $(".wrapper").removeClass("sidebar-hovered");
                }
            )
        }
    }

    showSidebaar() {
        let state = this.getSideBarState();
        if (state) {
            $("#lg-logo").show();
            $("#sm-logo").hide();
        }
    }

    hideSidebaar() {
        let state = this.getSideBarState();
        if (state) {
            $("#lg-logo").hide();
            $("#sm-logo").show();
        }
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
        $("#lg-logo").show();
        $("#sm-logo").hide();
        let roleadd:any =  sessionStorage.getItem("adminDetail");
        let data = JSON.parse(roleadd)
        console.log(data.userDetails.name,'sidebar');
        if(data.userDetails.name=="admin"){
            this.menuItems = AdminRoutes.filter(menuItem => menuItem);
        }else{
            this.menuItems = ROUTES.filter(menuItem => menuItem);
        }
    $.getScript('./assets/js/app-sidebar.js');

    }

}
