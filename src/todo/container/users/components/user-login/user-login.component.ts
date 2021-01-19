
import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {Store} from "@ngrx/store";
import {userState} from "../../reducers/user.reducer";
import * as userActions from '../../actions/user.actions';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public isEmpty:boolean = false;
  error = "";
  constructor(private store:Store<userState>, private authService: UserService, private router: Router,) { }

  ngOnInit(): void {
  }

  public submitLogin(){
    if(this.user.email !== '' && this.user.password !== ''){
      this.error = "";
      this.authService.login(this.user).pipe().subscribe(response => {

        if(response.status == "success")
        {
          localStorage.setItem('currentUserResponse', response.status);
          // console.log(response);
          this.router.navigate(['/product/home']);
        }
        else {
          this.error = "invalid email / password";
        }

      });
      // dispatch
      this.store.dispatch(userActions.loginUser({user : this.user}));
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
  }

}
