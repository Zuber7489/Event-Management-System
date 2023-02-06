import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  signupForms= new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  signupUser(){
this.http.post('https://event-r2eh.onrender.com/employee/signup',this.signupForms.value).subscribe(res=>{
  console.log(res,"data aya")
  alert('Signin Successfully')
  this.router.navigate(['sign-in'])
})
  }

  

}
