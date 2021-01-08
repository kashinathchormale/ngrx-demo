import { createAction } from '@ngrx/store';

// export enum TodosActionsTypes {
//   LoadTodos = '[TODO] Loading todos',
//   LoadTodosSuccess = '[TODO] Loading todos success',
//   LoadTodosFail = '[TODO] Loading todos fail'
// }

// export const LoadTodo = createAction(
//   TodosActionsTypes.LoadTodos
// );

// export const LoadTodoSuccess = createAction(
//   TodosActionsTypes.LoadTodosSuccess
// );

// export const LoadTodoFail = createAction(
//   TodosActionsTypes.LoadTodosFail
// );


export enum ProductsActionsTypes {
  LoadProducts = '[PRODUCT] Loading products',
  LoadProductsSuccess = '[PRODUCT] Loading products success',
  LoadProductsFail = '[PRODUCT] Loading products fail'
}

export const LoadProducts = createAction(
  ProductsActionsTypes.LoadProducts
);

export const LoadProductsSuccess = createAction(
  ProductsActionsTypes.LoadProductsSuccess
);

export const LoadProductsFail = createAction(
  ProductsActionsTypes.LoadProductsFail
);
