import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isError: boolean = false;
  id: any;
  data:any;
  constructor( private route: ActivatedRoute,private router: Router,public http:HttpClient,private toaster:ToastrService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    
  }


  paymentForm = new FormGroup({
    name : new FormControl('',Validators.required),
    number : new FormControl('',Validators.required),
    expire : new FormControl('',Validators.required),
    cvc: new FormControl('',Validators.required)
  })

  public get f() {
    return this.paymentForm.controls;
  }




  Data(){
    if (this.paymentForm.invalid) {
      this.isError = true;
    } else {
      this.data = {
        "Status":"true",
      }
      this.http.put('http://localhost:3000/employee/eventlist/data/'+this.id, this.data).subscribe(res => {
        console.log(res,'checking');
        this.toaster.success('Payment Done')
  this.router.navigate(['admin/staff'])
      })
    }
  
  }



}
