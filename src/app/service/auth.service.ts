import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Links } from '../links.module';
import { map } from 'rxjs/operators';


const authToken = sessionStorage.getItem('authToken')
console.log(authToken, 'authToken');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authKey': 'a22f96db8bddb95ad0dc60dad56aaed6',
    'auth-token': String(authToken)
  }),
};

const httpUploadOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'authKey': 'a22f96db8bddb95ad0dc60dad56aaed6',
    'auth-token': String(authToken)
  }),

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  addStaffUser(value: any) {
    throw new Error('Method not implemented.');
  }
  getStaffById(id: any) {
    throw new Error('Method not implemented.');
  }
  updateStaff(value: any) {
    throw new Error('Method not implemented.');
  }



  constructor(private router: Router, private toastr: ToastrService,
    private http: HttpClient) {
  }

  

}
