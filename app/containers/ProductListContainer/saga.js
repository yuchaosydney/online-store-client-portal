import { call, put } from 'redux-saga/effects';

import { httpCall } from '../share/http';

import { requestProductsSucceded, requestProductsFail } from './actions';
import { takeLatest } from 'redux-saga';
import { REQUEST_PRODUCTS } from './constants';

function fetchProductsFromServer() {
  return httpCall('api/product/all').then(response => response.json());
}

function* fetchProducts() {
  try {
    const products = yield call(fetchProductsFromServer);
    yield put(requestProductsSucceded(products));
  } catch (e) {
    yield put(requestProductsFail(e));
  }
}

export default function* fetchProductsSaga() {
  yield* takeLatest(REQUEST_PRODUCTS, fetchProducts);
}
