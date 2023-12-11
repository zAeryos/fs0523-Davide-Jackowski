import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IAccessData } from '../pages/auth/Models/i-access-data';
import { environment } from '../../environments/environment.development';
import { IRegister } from '../pages/auth/Models/i-register';
import { ILogin } from '../pages/auth/Models/i-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService  = new JwtHelperService()
  authSubject                 = new BehaviorSubject<IAccessData|null>(null);
  user$                       = this.authSubject.asObservable();
  isLoggedIn$                 = this.user$.pipe(map(user => !!user))

  constructor(
    private http    : HttpClient,
    private router  : Router
  ) {

    this.restoreUser()

  }

  registerUrl : string  = environment.apiUrl + '/register';
  loginUrl    : string  = environment.apiUrl + '/login'

  signUp(data:IRegister):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.registerUrl, data)
  }

  login(data:ILogin):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))


      this.autoLogout(data.accessToken)
    }))
  }

  autoLogout(jwt:string){
    const expDate   = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs     = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logout()
    },expMs)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  restoreUser(){

      const userJson:string|null =  localStorage.getItem('accessData');
      if(!userJson) return;

      const accessData:IAccessData = JSON.parse(userJson);
      if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

      this.authSubject.next(accessData)
      this.autoLogout(accessData.accessToken)
  }


  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return new Error('Email and password required');
            break;
        case "Email already exists":
            return new Error('User already exists');
            break;
        case 'Email format is invalid':
            return new Error('Email written incorrectly');
            break;
        case 'Cannot find user':
            return new Error('The user does not exist');
            break;
            default:
        return new Error('Unknown error, try again');
            break;
    }
  }

}
