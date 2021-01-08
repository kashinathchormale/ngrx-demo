import { Action } from '@ngrx/store';
import { ITodoList } from 'src/models/list.interface';

// load products
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: ITodoList[]) {}
}

// create products
export const CREATE_PRODUCT = '[Products] Create Product';
export const CREATE_PRODUCT_FAIL = '[Products] Create Product Fail';
export const CREATE_PRODUCT_SUCCESS = '[Products] Create Product Success';

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;
  constructor(public payload: ITodoList) {}
}

export class CreateProductSuccess implements Action {
  readonly type = CREATE_PRODUCT_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class CreateProductFail implements Action {
  readonly type = CREATE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

// update products
export const UPDATE_PRODUCT = '[Products] Update Product';
export const UPDATE_PRODUCT_FAIL = '[Products] Update Product Fail';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update Product Success';

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: ITodoList) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class UpdateProductFail implements Action {
  readonly type = UPDATE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

// delete products
export const DELETE_PRODUCT = '[Products] Delete Product';
export const DELETE_PRODUCT_FAIL = '[Products] Delete Product Fail';
export const DELETE_PRODUCT_SUCCESS = '[Products] Delete Product Success';

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: ITodoList) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
  constructor(public payload: ITodoList) {}
}

export class DeleteProductFail implements Action {
  readonly type = DELETE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

export type ProductActions =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | DeleteProduct
  | DeleteProductFail
  | DeleteProductSuccess;
