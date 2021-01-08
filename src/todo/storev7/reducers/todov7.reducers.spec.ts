import * as fromReducers from './todov7.reducers';
import * as fromActions from '../actions/productv7.actions';
import { ITodoList } from 'src/models/list.interface';

describe('ProductRedcuers', () => {
  describe('undefined action', () => {
    it('should return default state', () => {
      const { initialStateProduct } = fromReducers;
      const action = {} as any;
      const state = fromReducers.reducer(undefined, action);
      expect(state).toBe(initialStateProduct);
    });
  });

  describe('Load Product Action', () => {
    it('should set loading to true', () => {
      const action = new fromActions.LoadProducts();
      const state = fromReducers.reducer(undefined, action);
      expect(state.loading).toEqual(true);
    });
  });

  // describe('Load Todo Success Action', () => {
  //   it('should map array to entities', () => {
  //     const todos: any[] = [
  //       {
  //         "productName": "aSa",
  //     "price": 1,
  //     "quantity": "2",
  //     "datepicker": "2020-02-29T18:30:00.000Z",
  //     "stock": true,
  //     "id": 38,
  //     "timestamp": 1583418397399,
  //     "userId": 1
  //       },
  //       {
  //         "productName": "aSa",
  //     "price": 2,
  //     "quantity": "2",
  //     "datepicker": "2020-02-29T18:30:00.000Z",
  //     "stock": true,
  //     "id": 39,
  //     "timestamp": 1583418397399,
  //     "userId": 2
  //       }
  //     ];
  //     const entities = {
  //       1: todos[0],
  //       2: todos[1]
  //     };
  //     const { initialStateProduct } = fromReducers;
  //     const action = new fromActions.LoadProductsSuccess(todos);
  //     const state = fromReducers.reducer(initialStateProduct, action);
  //     expect(state.productEntites).toEqual(entities);
  //     expect(state.loading).toEqual(false);
  //     expect(state.loaded).toEqual(true);
  //   });
  // });
});
