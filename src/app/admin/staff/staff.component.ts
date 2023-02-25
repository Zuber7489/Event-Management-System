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
import { FormControl } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
  nameFilter = new FormControl('');
  filterValues = {
    eventtype: '',
  };
  constructor(private toastr: ToastrService, private router: Router, private threeDService: ThreeDServiceService,public http:HttpClient) {
    this.dataSource.filterPredicate = this.createFilter();
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


  changeStatus(event: any,id: any,) {
    
    if(event.checked){
      this.http.get('https://event-r2eh.onrender.com/employee/eventlist/'+ id +'?action=active').subscribe(res => {
        if (res) {
          console.log(res);
          this.toastr.success('Active succesfully');
        } else {
          this.toastr.error('error');
        }
      }, error => {
        this.threeDService.hide();
        this.toastr.error('Technical Issue.')
        console.log(error);
      })
    }
    else{
      this.http.get('https://event-r2eh.onrender.com/employee/eventlist/'+ id +'?action=inActive').subscribe(res => {
        if (res) {
          console.log(res);
          this.toastr.success('inActive succesfully');
        } else {
          this.toastr.error('error');
        }
      }, error => {
        this.threeDService.hide();
        this.toastr.error('Technical Issue.')
        console.log(error);
      })
    }

    }
    


}
