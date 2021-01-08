import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromTodoActions from '../actions/productv7.actions';
import { map, switchMap, catchError, tap, takeLast } from 'rxjs/operators';
import { ApiServiceService } from '../../services/api-service.service';
import { of } from 'rxjs';

import * as FromRoot from '../../../app/storev7';

@Injectable()
export class TodoEffectsService {
  constructor(private action: Actions, private service: ApiServiceService) {}

  @Effect()
  loadTodoList$ = this.action.pipe(
    ofType(fromTodoActions.LOAD_PRODUCTS),
    switchMap(() => {
      return this.service.getList().pipe(
        map(data => new fromTodoActions.LoadProductsSuccess(data)),
        catchError(err => of(new fromTodoActions.LoadProductsFail(err)))
      );
    })
  );
  @Effect()
  createTodo$ = this.action.pipe(
    ofType(fromTodoActions.CREATE_PRODUCT),
    map((actions: fromTodoActions.CreateProduct) => actions.payload),
    switchMap(todo =>
      this.service.createItem(todo).pipe(
        map(data => new fromTodoActions.CreateProductSuccess(data)),
        catchError(err => of(new fromTodoActions.CreateProductFail(err)))
      )
    )
  );

  @Effect()
  createTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.CREATE_PRODUCT_SUCCESS),
    map((actions: fromTodoActions.CreateProductSuccess) => actions.payload),
    map(todo => {
      return new FromRoot.Go({
        path: ['/product/list']
      });
    })
  );

  @Effect()
  updateTodo$ = this.action.pipe(
    ofType(fromTodoActions.UPDATE_PRODUCT),
    map((actions: fromTodoActions.UpdateProduct) => actions.payload),
    switchMap(todo =>
      this.service.updateItem(todo).pipe(
        map(data => new fromTodoActions.UpdateProductSuccess(data)),
        catchError(err => of(new fromTodoActions.UpdateProductFail(err)))
      )
    )
  );
  @Effect()
  updateTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.UPDATE_PRODUCT_SUCCESS),
    map((actions: fromTodoActions.UpdateProductSuccess) => actions.payload),
    map(todo => {
      return new FromRoot.Go({
        path: ['/product/list']
      });
    })
  );

  @Effect()
  deleteTodo$ = this.action.pipe(
    ofType(fromTodoActions.DELETE_PRODUCT),
    map((actions: fromTodoActions.DeleteProduct) => actions.payload),
    switchMap(todo =>
      this.service.removeItem(todo.id).pipe(
        map(() => new fromTodoActions.DeleteProductSuccess(todo)),
        catchError(err => of(new fromTodoActions.DeleteProductFail(err)))
      )
    )
  );
  @Effect()
  deleteTodoSuccess$ = this.action.pipe(
    ofType(fromTodoActions.DELETE_PRODUCT_SUCCESS),
    map((actions: fromTodoActions.DeleteProductSuccess) => actions),
    map(() => {
      return new FromRoot.Go({
        path: ['/product/list']
      });
    })
  );
}
