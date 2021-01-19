import { Action, createReducer, on } from '@ngrx/store';
import {IUser} from "../models/IUser";
import * as userActions from '../actions/user.actions';
import { state } from '@angular/animations';

export const userFeatureKey = 'user';

export interface userState {
  loading : boolean,
  errorMessage : string,
  user : IUser,
  token : string,
  isAuthenticated : boolean
}

export const initialState: userState = {
  loading : false,
  errorMessage : '',
  user : {} as IUser,
  token : '',
  isAuthenticated : false
};

export const reducer = createReducer(
  initialState,
  // Register a User
  on(userActions.registerUser, (state , {user}) => {
    return {
      ...state,
      loading : true,
    }
  }),
  on(userActions.registerUserSuccess, (state , {result}) => {
    return {
      ...state,
      loading : false,
    }
  }),
  on(userActions.registerUserFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // login User
  on(userActions.loginUser, (state , {user}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.loginUserSuccess, (state, {user}) => {
    console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
    return {
      ...state,
      loading : false,
      user : user,
      isAuthenticated : true
    }
  }),
  on(userActions.loginUserFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  on(userActions.setLoginUser, (state , {user}) => {
    return {
      ...state,
      loading : false,
      user : user,
      isAuthenticated : true
    }
  }),
  on(userActions.logoutUser,(state)=>{
    localStorage.clear();
    return{
      ...state
    }
  })

);


