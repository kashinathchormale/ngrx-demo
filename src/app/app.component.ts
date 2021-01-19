import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";
import {userState} from "../todo/container/users/reducers/user.reducer";
import * as userActions from '../todo/container/users/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ngrxstrore-angular';
  localdata;
  isUserAuth = false;
  constructor(private store:Store<userState>){}
  ngOnInit(){
    this.localdata = localStorage.getItem('user');
    console.log(this.localdata); 
    if(this.localdata){
    this.store.dispatch(userActions.setLoginUser({user : JSON.parse(this.localdata)}));
    }
  }
}
