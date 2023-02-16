import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public http: HttpClient, private router: Router, private toaster: ToastrService) { }

  ngOnInit() {

  }




  loginForms = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })



  loginuser() {
    if (this.loginForms.value.email === 'admin@gmail.com' && this.loginForms.value.password === 'admin') {
      this.http.post('https://event-r2eh.onrender.com/employee/loginEvent', this.loginForms.value).subscribe(res => {
        
        sessionStorage.setItem("adminDetail", JSON.stringify(res));
        this.toaster.success('Login SuccessFully')
        this.router.navigate(['admin/dashboard'])

      })
      }
     else {
      this.http.post('https://event-r2eh.onrender.com/employee/loginEvent', this.loginForms.value).subscribe(res => {

        sessionStorage.setItem("adminDetail", JSON.stringify(res));
        this.toaster.success('Login SuccessFully')
        this.router.navigate(['admin/profile'])
        
      })
        
    }
    this.toaster.error('username or password is incorrect')
    
  }





}