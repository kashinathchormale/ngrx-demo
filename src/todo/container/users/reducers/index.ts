import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as FromReducers from '../../users/reducers/user.reducer';

export const stateFeatureKey = 'state';

export const storeName = 'userStore';

export interface UserAppState {
  user: FromReducers.userState;
  
}

export const reducers: ActionReducerMap<UserAppState> = {
  user: FromReducers.reducer,
};

export const getTodoAppState = createFeatureSelector<
UserAppState
>(storeName);

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
