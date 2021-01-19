import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {catchError, concatMap, map, mergeMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService:UserService,
              private router : Router) {}

  @Effect()
  public registerUser(){
    return this.actions$.pipe(
      ofType(userActions.registerUser),
      concatMap((action) => this.userService.registerUser(action.user).pipe(
        map(({result}) => userActions.registerUserSuccess({result})),
        catchError((error) => of(userActions.registerUserFailure({error})))
      ))
    )
  }

  @Effect()
  public loginUser(){
    return this.actions$.pipe(
      ofType(userActions.loginUser),
      concatMap((action) => this.userService.loginUser(action.user).pipe(
       // tap((user)=> userActions.setLoginUser(user: user[0])),
        map((user) => userActions.loginUserSuccess({user: user[0]})),
        catchError((error) => of(userActions.loginUserFailure({error})))
      ))
    )
  }

// Registration is success -> redirect to Login Page
  @Effect({ dispatch: false })
  registerUserSuccess$ = this.actions$.pipe(
    ofType(userActions.registerUserSuccess),
    tap(() => this.router.navigate(['/product/account/login']))
  );

 // Login is success -> redirect to home Page
  @Effect({ dispatch: false })
  loginUserSuccess$ = this.actions$.pipe(
    ofType(userActions.loginUserSuccess),
    tap(() => this.router.navigate(['/']))
  );

}

