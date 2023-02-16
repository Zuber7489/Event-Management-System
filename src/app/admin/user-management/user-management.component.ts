import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  count=0;
  constructor(public http:HttpClient) { }
  displayedColumns: string[] = ['sNo', 'name',  'number', 'email'];
  userData: any = [];
  dataSource = new MatTableDataSource(this.userData);
  zuberdata:any;
  token = sessionStorage.getItem('adminDetail')
  ngOnInit(): void {
    this.count++;
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
