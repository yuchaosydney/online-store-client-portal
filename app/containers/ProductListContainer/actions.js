/*
 *
 * ProductListContainer actions
 *
 */

import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCEEDED,
  REQUEST_PRODUCTS_FAIL,
  TOGGLE_PRODUCT,
} from './constants';

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function requestProductsSucceded(products) {
  return {
    type: REQUEST_PRODUCTS_SUCCEEDED,
    products,
  };
}

export function requestProductsFail(message) {
  return {
    type: REQUEST_PRODUCTS_FAIL,
    message,
  };
}

export function toggleProduct(product) {
  return {
    type: TOGGLE_PRODUCT,
    product,
  };
}
