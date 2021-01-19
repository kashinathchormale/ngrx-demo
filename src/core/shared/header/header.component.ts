import { Component, Input, OnInit } from '@angular/core';
// import { CartService } from 'src/app/products/cartComponent/cartComponent.service';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../theme/theme.service';
import {Store} from "@ngrx/store";
import {userState} from "../../../todo/container/users/reducers/user.reducer";
import * as userActions from '../../../todo/container/users/actions/user.actions';
import { UserService } from 'src/todo/container/users/services/user.service';
import * as fromSelectors from '../../../app/storev7';
import { IUser } from 'src/todo/container/users/models/IUser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    itemLength;
    items = [];
    cartvalueLength = 0;
    public data : Array<any>
    currentUser;
    //localdata;
    userAuthenticated = false;
    // @Input() localdata;
  userStore$ = this.store.select(fromSelectors.getuserState);
  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  userLogged;

  constructor(private themeService: ThemeService, private store:Store<userState>, private userSerive: UserService) {
    //   this.cartservice.myMethod$.subscribe((data) => {
    //     this.items = data;
    //     this.cartvalueLength = data.length; // And he have data here too!
    //      console.log('this.itemLength',data);
    //  });
   
   }

  ngOnInit() {

    if (localStorage.getItem('currentUserResponse') == "success"){
       alert('Hi');
       this.userLogged = true;
     }else{
       this.userLogged = false;
     }

    this.userSerive.login(this.user).pipe().subscribe(response => {

      if(response.status == "success")
      {
        console.log('success');
      }
    });
    
    this.themeService.setLightTheme();
    this.data = this.itemLength;
    //this.itemLength = localStorage.getItem('productItem');
   //console.log('itemLength;', this.itemLength);
  //  this.localdata = localStorage.getItem('user');
  this.userSerive.getUser().subscribe(user => this.currentUser = user);
  //  if(this.localdata){
  //   this.currentUser = JSON.parse(this.localdata);
  //   this.userAuthenticated = true;
  // }
  this.userStore$.pipe()
  .subscribe(user =>
    console.log(user)
    );
   
  }

  logoutuser(){
    alert()
   // this.store.dispatch(userActions.logoutUser);
    this.userSerive.logout();
  }
  toggleTheme(){
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

}
