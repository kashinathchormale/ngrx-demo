import { ITodoList } from 'src/models/list.interface';

import * as FromProductActions from '../actions/productv7.actions';

export interface ProductState {
  productEntites: { [id: number]: ITodoList };
  loaded: boolean;
  loading: boolean;
}

export const initialStateProduct: ProductState = {
  productEntites: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialStateProduct,
  action: FromProductActions.ProductActions
): ProductState {
  switch (action.type) {
    case FromProductActions.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case FromProductActions.LOAD_PRODUCTS_SUCCESS: {
      console.log(action.payload)
      const list = action.payload;
      const productEntites = list.reduce(
        (en: { [id: number]: ITodoList }, todo: ITodoList) => {
          return {
            ...en,
            [todo.id]: todo
          };
        },
        {
          ...state.productEntites
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        productEntites
      };
    }
    case FromProductActions.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case FromProductActions.UPDATE_PRODUCT_SUCCESS:
    case FromProductActions.CREATE_PRODUCT_SUCCESS: {
      const todo = action.payload;
      const productEntites = {
        ...state.productEntites,
        [todo.id]: todo
      };
      return {
        ...state,
        productEntites
      };
    }

    case FromProductActions.DELETE_PRODUCT_SUCCESS: {
      const todo = action.payload;
      const { [todo.id]: removed, ...productEntites } = {
        ...state.productEntites
      };
      return {
        ...state,
        productEntites
      };
    }
  }

  return state;
}
