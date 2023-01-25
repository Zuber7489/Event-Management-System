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


  checkForm = new FormGroup({
    date: new FormControl(''),
    typer: new FormControl(''),
    placer: new FormControl('')
  })

  show = false;

  constructor(private router: Router, private toastr: ToastrService,
    private route: ActivatedRoute, private ThreeDService: ThreeDServiceService) {
  }

  ngOnInit(): void {
    this.dashboardCount();

  }

  dashboardCount() {

  }
  zuberdata: any
  onSubmit() {
    this.show=true
    this.zuberdata = this.checkForm.value;
    // alert('This Event Slot is Available.');

  }


}
