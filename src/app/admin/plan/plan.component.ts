import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  redirected(){
this.route.navigate(['/admin/staff/add-staff'])
  }
  

}
