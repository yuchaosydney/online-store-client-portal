/*
 *
 * ProductListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_PRODUCTS_SUCCEEDED
} from './constants';

export const initialState = fromJS({});

function productListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS_SUCCEEDED:
      return state.set('products', action.products);
    default:
      return state;
  }
}

export default productListContainerReducer;
