import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-event-avl',
  templateUrl: './event-avl.component.html',
  styleUrls: ['./event-avl.component.scss']
})
export class EventAvlComponent implements OnInit {
  isError:boolean=false;
  searchForm=new FormGroup({
    eventtype: new FormControl('',Validators.required),
    eventdate: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public get f() {
    return this.searchForm.controls;
  }

  

  searchData(){
    if(this.searchForm.invalid){
      this.isError = true;
    }else{
        alert('This Place is Available on Selected date.')
      console.log(this.searchForm.value);
    }
    
  }

}
