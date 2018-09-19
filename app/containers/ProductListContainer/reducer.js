/*
 *
 * ProductListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { 
  REQUEST_PRODUCTS_SUCCEEDED,
  REQUEST_PRODUCTS,
  TOGGLE_PRODUCT
} from './constants';

export const initialState = fromJS({
  products: [],
  loading: false,
  loaded: false,
  toggledProduct: null
});

function productListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return state.set('loading', true);
    case REQUEST_PRODUCTS_SUCCEEDED:
      return state
        .set('products', action.products)
        .set('loading', false)
        .set('loaded', true);
    case TOGGLE_PRODUCT:
      return state.get('toggledProduct') ? state.set('toggledProduct', null) : state.set('toggledProduct', action.product);
    default:
      return state;
  }
}

export default productListContainerReducer;
