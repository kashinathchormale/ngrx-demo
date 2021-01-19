import { createAction, props } from '@ngrx/store';
import {IUser} from "../models/IUser";

// Register a User
export const registerUser = createAction(
  '[User] Register User',
  props<{user : IUser}>()
);

export const registerUserSuccess = createAction(
  '[User] Register User Success',
  props<{result : string}>()
);

export const registerUserFailure = createAction(
  '[User] Register User Failure',
  props<{error : string}>()
);

// Login a User
export const loginUser = createAction(
  '[User] Login User',
  props<{user : IUser}>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{user : IUser}>()
);

export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{error : string}>()
);


// Logout a User
export const logoutUser = createAction(
  '[User] Logout User'
);

// Login a User
export const setLoginUser = createAction(
  '[User] Set Login User',
  props<{user : IUser}>()
);

