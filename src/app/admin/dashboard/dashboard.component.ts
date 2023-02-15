import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


 

  
 lDetail:any;
  roleadd:any;
  sDetail:any
  constructor(private router: Router, private toastr: ToastrService, 
    private route: ActivatedRoute, private ThreeDService: ThreeDServiceService) {
      this.roleadd =  localStorage.getItem("role");
     }

  ngOnInit(): void {
    this.dashboardCount();
    // const firstTime = localStorage.getItem('key')
    // if(!firstTime){
    //   localStorage.setItem('key','loaded')
    //  location.reload()
    // }else {
    //   localStorage.removeItem('key') 
    // }
  }
  element:any;
  staffCount:any
  dashboardCount() {
    let sessionData:any =  localStorage.getItem("leaveDetail"); 
    this.lDetail = JSON.parse(sessionData);
    for (let index = 0; index < this.lDetail.length; index++) {
       this.element = this.lDetail.length;
      console.log(this.element,'count');
      
    }
    let count:any =  localStorage.getItem("signUp"); 
    this.sDetail = JSON.parse(count);
    for (let index = 0; index < this.sDetail.length; index++) {
      this.staffCount = this.sDetail.length;
      console.log(this.staffCount,'staffCount');
    }
    // this.ThreeDService.show();
  //   this.authService.dashboardCount().subscribe(res => {
  //     this.ThreeDService.hide();
  //     if (res.response == 200) {
  //       this.totalUser = res.data.totalUser;
  //       this.totalAdmin = res.data.totalAdmin;
  //     } else {
  //       this.toastr.error(res.message);
  //     }
  //   }, error => {
  //      this.toastr.error('Internal Server Error');
  //   })
  }
}
