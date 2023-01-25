import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  id: any;
  datas:any;

  today = new Date();

  constructor(private route: ActivatedRoute,private router: Router,public http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.invoice()
  }
zuberdata:any;
  invoice(){
    this.http.put('http://localhost:3000/employee/eventlist/data/'+this.id, this.datas).subscribe(res => {
this.zuberdata = res;
console.log(this.zuberdata.eventtype);

    })
  }

}
