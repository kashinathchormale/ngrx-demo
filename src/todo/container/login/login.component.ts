import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {IUser} from "../users/models/IUser";
import {Store} from "@ngrx/store";

import { UserService } from '../users/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(private authService: UserService , private router: Router, ref: ChangeDetectorRef) {
    //ref.detach();
  }

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public isEmpty:boolean = false;
  error = "";
  ngOnInit(): void {
  }

  public submitLogin(){
    if(this.user.email !== '' && this.user.password !== ''){
      // dispatch
      
      // this.store.dispatch(userActions.loginUser({user : this.user}));
      this.error = "";
      this.authService.login(this.user).pipe().subscribe(response => {

        if(response.status == "success")
        {
          localStorage.setItem('currentUserResponse', response.status);
          // console.log(response);
         // this.router.navigate(['/product/home']);
        }
        else {
          this.error = "invalid email / password";
        }

      });
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
  }

}
