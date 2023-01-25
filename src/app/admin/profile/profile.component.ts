import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: any;
    sessionData:any;
  constructor() { 
    this.sessionData = sessionStorage.getItem('adminDetail');
    this.data = JSON.parse(this.sessionData);
  }

  
  

  ngOnInit(): void {
  }

  

}
