import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  c: number = 0;
  Pro:number=0;
  Premium:number=0;
  allData: any;
  userData: any;
  token = sessionStorage.getItem('adminDetail');
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private ThreeDService: ThreeDServiceService,
    public http: HttpClient
  ) {}

  userCount:number=0;
  bookingCount:number=0;
  ngOnInit(): void {
    this.http
      .get('https://event-r2eh.onrender.com/employee/signup/alldata', {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ` + this.token,
        }),
      })
      .subscribe((res) => {
        this.userData = res;
       this.userCount =this.userData.length;
      });

    this.http
      .get('https://event-r2eh.onrender.com/employee/eventlist/data')
      .subscribe((res) => {
        console.log(res);
        this.allData = res;
       
            
          this.allData.forEach((element: { plan: any; }) => {
            if (element.plan  == "Basic") {
              this.c = this.c + 1;
            }else if(element.plan == 'Pro'){
              this.Pro = this.Pro + 1;
            }else if(element.plan=='Premium'){
              this.Premium= this.Premium + 1;
            }
            
            
          });
        
        this.bookingCount =this.allData.length
      });
  }
}
function elseIf(arg0: boolean) {
  throw new Error('Function not implemented.');
}

