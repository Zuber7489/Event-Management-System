import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, 
    private route: ActivatedRoute, private ThreeDService: ThreeDServiceService) {
      
     }

  ngOnInit(): void {
    this.dashboardCount();
   
  }
 
  dashboardCount() {
    
  }
}
