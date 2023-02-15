import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInAnimation } from './../../service/route.animation';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { query } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-event-available',
  templateUrl: './event-available.component.html',
  styleUrls: ['./event-available.component.scss']
})
export class EventAvailableComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  displayedColumns: string[] = ['sNo', 'eventtype',  'date', 'place', 'guest','foodtype','plan','payment','price' ,'action'];
  userData: any = [];
  dataSource = new MatTableDataSource(this.userData);
  nameFilter = new FormControl('');
  filterValues = {
    eventtype: '',
  };
  constructor(private toastr: ToastrService, private router: Router, private threeDService: ThreeDServiceService,public http:HttpClient) {
    this.dataSource.filterPredicate = this.createFilter();
  }

  httpOptions:any;
  data: any;
  sessionData:any;
  ngOnInit(): void {
    this.sessionData = sessionStorage.getItem('adminDetail');
    this.data = JSON.parse(this.sessionData);
    console.log(this.data.token);
    
    this.getAllStaff();
  }
 
  
  getAllStaff() {
    this.httpOptions = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.data.token}`)
    };
    
   this.http.get('https://event-r2eh.onrender.com/employee/eventlist/userdata',this.httpOptions).subscribe(res=>{

     this.userData = [res]
     console.log(this.userData)
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

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data: { name: string; id: { toString: () => string; }; colour: string; pet: string; }, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
        && data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;
    }
    return filterFunction;
  }

}
