import * as FromReducers from './todov7.reducers';
import * as FromUserReducer from './user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export * from './todov7.reducers';
export * from './user.reducer';

export const storeName = 'shoppingCartStore';

export interface ProductAppState {
  products: FromReducers.ProductState;
  
}

export const reducers: ActionReducerMap<ProductAppState> = {
  products: FromReducers.reducer,
};

export const getTodoAppState = createFeatureSelector<
ProductAppState
>(storeName);


