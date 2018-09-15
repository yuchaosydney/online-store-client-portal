import { fromJS } from 'immutable';
import productListContainerReducer from '../reducer';

describe('productListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(productListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
