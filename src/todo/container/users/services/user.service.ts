import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import {IUser} from "../models/IUser";
import {catchError, retry} from "rxjs/operators";
import {Observable, BehaviorSubject, Subject, throwError} from "rxjs";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  localdata;

  currentLoggedUser = new Subject();

  constructor(private httpClient:HttpClient, private router: Router) { 
    this.localdata = null;
    this.localdata = localStorage.getItem('user');
    console.log(this.localdata); 
    if(this.localdata){
      this.currentLoggedUser.next(JSON.parse(this.localdata));
    }
    this.getUser().subscribe(user => console.log(user));

    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    //this.localdata = this.setUser()
  }

  // register a user
  public registerUser(user : IUser):Observable<{result : string}>{
    let dataURL : string = `${environment.apiURL}/users`;
    return this.httpClient.post<{result : string}>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public authenticateUser(user : IUser):Observable<{result : IUser[]}>{
    let dataURL : string = `${environment.apiURL}/authenticatedUser`;
    return this.httpClient.post<{result : IUser[]}>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // login a user
  public loginUser(user : IUser):Observable<{user : IUser[]}>{
    let dataURL : string = `${environment.apiURL}/users?email=${user.email}&password=${user.password}`;  
    // this.setUser({
    //   "name": "test",
    //   "email": "ea@test.com",
    //   "password": "123",
    //   "id": 13
    // });  
    return this.httpClient.get<{user : IUser[]}>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public setUser(){
    //localStorage.setItem('user', JSON.stringify(user));
    // this.currentLoggedUser.next(null);
    //this.localdata = localStorage.getItem('user');  
    if(this.localdata){
      this.currentLoggedUser.next(JSON.parse(this.localdata));
    }
  }

  public getUser(){   
    return this.currentLoggedUser.asObservable();
  }


  public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else{
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // isLoggedIn
  public isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  // get token
  public getToken(){
    if(localStorage.getItem('token')){
      return localStorage.getItem('token');
    }
    else{
      return  "";
    }
  }

  login(user: IUser) {
    let dataURL: string = `${environment.apiURL}/users?email=${user.email}&password=${user.password}`;
    return this.httpClient.get<any>(dataURL)
      .pipe(map(data => {
        if (data.length > 0) {
          localStorage.setItem('currentUser', JSON.stringify(data[0]));
          this.currentUserSubject.next(data[0]);
          return {status: "success", data: data[0]};
        }
        else {
          return {status: "fail"};
        }
        //console.log(data);
      }));
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  logout() {
    // return this.httpClient.post<any>(`${environment.apiURL}/logout`, null).pipe(map(data => {
    //   return data;
    // }));
    localStorage.clear();
    this.router.navigate(['/product/home']);
  }

  // get UserInfo
  // public getUserInfo():IUser{
    // return JSON.parse(localStorage.getItem('user'));
  // }

  // isAdmin
  /*public isAdminUser(){
    let user:IUser = this.getUserInfo();
    if(user){
      return user.isAdmin;
    }
    else{
      return false;
    }
  }*/

}
