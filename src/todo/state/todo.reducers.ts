// import { ITodoList } from '../../models/list.interface';
// import { Action, createReducer, on } from '@ngrx/store';

// // import * as TodoPageActions from './todo.actions';
// import * as ProductPageActions from './todo.actions';

// export interface ITodoState {
//   list: ITodoList[];
//   loading: boolean;
//   loaded: boolean;
// }

// const intialState: ITodoState = {
//   list: [],
//   loaded: false,
//   loading: false
// };


// const productReducer = createReducer(
//   intialState,
//   on(ProductPageActions.LoadProducts, state => ({ ...state, loading: true })),
//   on(ProductPageActions.LoadProductsSuccess, state => ({ ...state, loading: false, loaded: true })),
//   on(ProductPageActions.LoadProductsFail, state => ({ ...state, loaded: false }))
// );

// export function reducer(state: ITodoState | undefined, action: Action) {
//   return productReducer(state, action);
// }


