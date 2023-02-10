import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
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
   
    // @ts-ignore
  google.accounts.id.initialize({
    client_id: "269829266947-sp6qek3ksaat8701d9okr3g01p14n0e0.apps.googleusercontent.com",
    callback: this.handleCredentialResponse.bind(this),
    auto_select: false,
    cancel_on_tap_outside: true,

  });
  // @ts-ignore
  google.accounts.id.renderButton(
  // @ts-ignore
  document.getElementById("google-button"),
    { theme: "outline", size: "xl-large", width: "100%" }
  );
  // @ts-ignore
  google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }
  
  zuberdata:any;
  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    console.log(response);
    this.zuberdata=response;
    sessionStorage.setItem("adminDetail", JSON.stringify(response));
    this.router.navigate(['admin'])
    // alert('successfully login')
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
    this.http.post('https://event-r2eh.onrender.com/employee/loginEvent', this.loginForms.value).subscribe(res => {
        sessionStorage.setItem("adminDetail", JSON.stringify(res));
        console.log(res,'data');
        this.toaster.success('Login SuccessFully')
        this.router.navigate(['admin'])
        
      }) 
  }

  



}