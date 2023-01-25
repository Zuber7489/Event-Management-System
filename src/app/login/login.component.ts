import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// import { MatDialog } from '@angular/material/dialog';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from '../service/auth.service';
// import { ThreeDServiceService } from '../service/three-dservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public http:HttpClient,private router: Router,private toaster:ToastrService) { }
  // declare loginForm: FormGroup;
  // constructor(private router: Router, public fb: FormBuilder, private toastr: ToastrService, public authService: AuthService,
  //   private route: ActivatedRoute, private ThreeDService: ThreeDServiceService, public dialog: MatDialog) {
    
  // }
  ngOnInit() {
    this.loginuser()
  }

  

  loginForms= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  // loginuser(){
  // console.warn(this.loginForms.value)
  // return this.http.post('https://iptseapi.kilobyte.live/v1/Member/Login',this.loginForms.value).subscribe(res=>{
  //   this.router.navigate(['admin']);
  //   console.log(res,'data')
  //  })
  // }

  loginuser() {
    this.http.post('http://localhost:3000/employee/loginEvent', this.loginForms.value).subscribe(res => {
        sessionStorage.setItem("adminDetail", JSON.stringify(res));
        console.log(res,'data');
        this.toaster.success('Login SuccessFully')
        this.router.navigate(['admin'])
        
      }) 
  }

  

}