import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInAnimation } from './../../service/route.animation';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {HttpClient} from '@angular/common/http'
import { query } from '@angular/animations';
 

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [fadeInAnimation]
})
export class StaffComponent implements OnInit {
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  displayedColumns: string[] = ['sNo', 'eventtype',  'date', 'place', 'guest','foodtype','plan','payment','price' ,'action'];
  userData: any = [];
  dataSource = new MatTableDataSource(this.userData);

 
  constructor(private toastr: ToastrService, private router: Router, private threeDService: ThreeDServiceService,public http:HttpClient) {
    
  }

  
  ngOnInit(): void {
    
    this.getAllStaff();
  }
 
  
  getAllStaff() {
   this.http.get('https://event-r2eh.onrender.com/employee/eventlist/data').subscribe(res=>{

console.log(res)
this.userData = res
   })
  }
  
  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addStaff() {
    this.router.navigate(['admin/staff/add-staff']);
  }

  pay(userId:any){
    this.router.navigate(['admin/staff/payment'],{queryParams:{id:userId}});
    console.log(userId,'id');
    
  }
  

  invoice(userId:any){
    this.router.navigate(['admin/staff/invoice'],{queryParams:{id:userId}});
  }

}
