import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginpage(){
    this.router.navigate(['/sign-in'])
  }

  signuppage(){
    this.router.navigate(['/signup'])
  }

}
