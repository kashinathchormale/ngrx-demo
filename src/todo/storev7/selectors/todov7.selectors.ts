import { createSelector } from '@ngrx/store';
import * as fromStoreIndex from '../reducers/index';
import * as fromReducers from '../reducers/todov7.reducers';


import { getRouteState } from '../../../app/storev7/index';

import { ITodoList } from '../../../models/list.interface';

const getProductLoading = (state: fromReducers.ProductState) => state.loading;
const getProductLoaded = (state: fromReducers.ProductState) => state.loaded;
const getProductEntites = (state: fromReducers.ProductState) => state.productEntites;

export const getProductState = createSelector(
  fromStoreIndex.getTodoAppState,
  (state: fromStoreIndex.ProductAppState) => state.products
);

export const getAllProductEntites = createSelector(
  getProductState,
  getProductEntites
);

export const getSelectedProduct = createSelector(
  getAllProductEntites,
  getRouteState,
  (entities, router): ITodoList => {
    return router.state && entities[router.state.params.id];
  }
);

export const getAllTodos = createSelector(
  getAllProductEntites,
  productEntites => {
    return Object.keys(productEntites).map(id => productEntites[id]);
  }
);
export const getAllLoading = createSelector(
  getProductState,
  getProductLoading
);
export const getAllloaded = createSelector(
  getProductState,
  getProductLoaded
);
