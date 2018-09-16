/*
 *
 * ProductListContainer actions
 *
 */

import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCEEDED,
  REQUEST_PRODUCTS_FAIL,
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
