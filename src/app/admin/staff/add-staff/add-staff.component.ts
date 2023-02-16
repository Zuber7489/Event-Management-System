import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  meraForm: FormGroup = new FormGroup({});
  isError: boolean = false;
  displayStyle: any = "none";

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private threeDService: ThreeDServiceService, public http: HttpClient) {
    this.meraForm = this.fb.group({
      eventtype: ['', Validators.required],
      date: ['', Validators.required],
      place: ['', Validators.required],
      guest: ['', Validators.required],
      foodtype: ['', Validators.required],
      decoration: ['', Validators.required],
      plan: ['',Validators.required],
      price:['']
    })
  }

  data: any;
  sessionData:any;

  ngOnInit(): void {
    this.sessionData = sessionStorage.getItem('adminDetail');
    this.data = JSON.parse(this.sessionData);
    console.log(this.data.token);
  }

  public get f() {
    return this.meraForm.controls;
  }

  httpOptions:any;
  onSubmit() {
    if (this.meraForm.invalid) {
      this.isError = true;
      this.toastr.error('Please fill the above details');
    } else {
      this.httpOptions = {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.data.token}`)
      };
      this.http.post('https://event-r2eh.onrender.com/employee/addevent', this.meraForm.value,this.httpOptions).subscribe(res => {
        this.toastr.success('Booked successfull');
    console.log(this.meraForm.value);
    
    this.router.navigate(['admin/event-available'])
      })

    }
  }


  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

   a :any= '₹ 100000'
   b :any= '₹ 200000';
   c :any='₹ 300000'
  zuberdata:any;
  prices(event:any){
this.zuberdata = event.target.value;
console.log(this.zuberdata,this.a);
  }

}
