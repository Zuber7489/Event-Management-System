import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data:any
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.data = sessionStorage.getItem("adminDetail");
    let token = JSON.parse(this.data)
    console.log(token.token,'auth')
    if(token.token){
      return true;
    }
    this.router.navigate(['sign-in']);
    return false;
  }
  
}
