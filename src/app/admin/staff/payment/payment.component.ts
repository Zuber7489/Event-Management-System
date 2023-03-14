import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentHandler:any = null;
  isError: boolean = false;
  id: any;
  sessionData:any;
  data:any;
  constructor( private route: ActivatedRoute,private router: Router,public http:HttpClient,private toaster:ToastrService) { this.sessionData = sessionStorage.getItem('adminDetail');
  this.data = JSON.parse(this.sessionData);
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.invoice();
    this.invokeStripe();
  }

  initializePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Payment Done!');
      }
    });
    

    paymentHandler.open({
      name: 'Event Booking',
      description: 'Secured Payment',
      
    });
    this.router.navigate(['admin/plan']);
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }



  
  datas:any;
zuberdata:any;
  invoice(){
    this.http.put('https://event-r2eh.onrender.com/employee/eventlist/data/'+this.id, this.datas).subscribe(res => {
this.zuberdata = res;
console.log(this.zuberdata.eventtype);

    })

}













}