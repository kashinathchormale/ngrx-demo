import * as fromTodoActions from './productv7.actions';
import { ITodoList } from 'src/models/list.interface';

describe('Product Actions', () => {
  describe('Load Products Actions', () => {
    describe('Load products', () => {
      it('should create an action', () => {
        const action = new fromTodoActions.LoadProducts();
        // expect({ ...action }).toEqual({
        //   type: fromTodoActions.LOAD_PRODUCTS
        // });
      });
    });
    describe('Load Products Success', () => {
      it('should create an action', () => {
        const payload: ITodoList[] = [];
        const action = new fromTodoActions.LoadProductsSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromTodoActions.LOAD_PRODUCTS_SUCCESS,
          payload
        });
      });
    });
    describe('Load Products Fail', () => {
      it('should create an action', () => {
        const payload = { message: 'Error' };
        const action = new fromTodoActions.LoadProductsFail(payload);
        expect({ ...action }).toEqual({
          type: fromTodoActions.LOAD_PRODUCTS_FAIL,
          payload
        });
      });
    });
  });
});
