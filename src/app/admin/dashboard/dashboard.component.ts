import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allbooking:any;
userData:any;
token = sessionStorage.getItem('adminDetail')
  constructor(private router: Router, private toastr: ToastrService, 
    private route: ActivatedRoute, private ThreeDService: ThreeDServiceService,public http:HttpClient) {
      
     }

  ngOnInit(): void {
    this.dashboardCount();
    this.dashboardcounter();
   
  }
 
  dashboardCount() {
    this.http.get('https://event-r2eh.onrender.com/employee/eventlist/data').subscribe(res=>{

console.log(res)
this.allbooking = res;
   })

   
  }

dashboardcounter(){
  this.http.get('https://event-r2eh.onrender.com/employee/signup/alldata', {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ` + this.token
    })
  }).subscribe(res=>{
this.userData = res
  })
}



}
