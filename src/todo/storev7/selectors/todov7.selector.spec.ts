import { TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import * as fromRootReducers from '../../../app/storev7/reducers';
import * as fromFeatureReducers from '../../storev7/reducers';
import * as fromFeatureActions from '../actions/productv7.actions';
import * as fromFeatureSelectors from './todov7.selectors';
import { ITodoList } from 'src/models/list.interface';

describe('Product Selectors', () => {
  let store: Store<fromFeatureReducers.ProductAppState>;

  const products: ITodoList[] = [
    {
      id: 3,
      productId: 3,
      productName: "kash",
      price: 3,
      quantity: "2",
      datepicker: "2020-02-29T18:30:00.000Z",
      stock: true
    }
  ];

  const entities = {
    1: products[0]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRootReducers.reducers,
          [fromFeatureReducers.storeName]: combineReducers(
            fromFeatureReducers.reducers
          )
        })
      ]
    });
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('Get Product entities', () => {
    it('should return Product as entities', () => {
      let result;

      store.select(fromFeatureSelectors.getAllProductEntites).subscribe(val => {
        result = val;
      });

      expect(result).toEqual({});

      store.dispatch(new fromFeatureActions.LoadProductsSuccess(products));

      //expect(result).toEqual(products[0]);
    });
  });

  describe('Get selected Product from router action', () => {
    it('should return Product as entities', () => {
      let result;

      store.dispatch(new fromFeatureActions.LoadProductsSuccess(products));

      store.dispatch({
        type: '@ngrx/router-store/request',
        payload: {
          routerState: {
            url: '/product/list',
            queryParams: {},
            params: {}
          },
          event: {
            id: 8,
            url: '/product/crud/1',
            navigationTrigger: 'imperative',
            restoredState: null
          }
        }
      });

      store.select(fromFeatureSelectors.getSelectedProduct).subscribe(val => {
        result = val;
      });

      expect(result).toEqual(products[1]);
    });
  });
});
