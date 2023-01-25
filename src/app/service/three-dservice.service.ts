import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'auth': 'uuCm8VxPDUJWqMGL7ZHI5sVTQaYZGpgh'
  })
};
const httpOption = {
  headers: new HttpHeaders({
    'auth': 'uuCm8VxPDUJWqMGL7ZHI5sVTQaYZGpgh'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ThreeDServiceService {
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
  
  show() {
    this.spinner.show();
  }
  hide() {
    this.spinner.hide();
  }
 
}
