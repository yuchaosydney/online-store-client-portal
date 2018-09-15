import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productListContainer state domain
 */

const selectProductListContainerDomain = state =>
  state.get('productListContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductListContainer
 */

const makeSelectProductListContainer = () =>
  createSelector(selectProductListContainerDomain, substate => substate.toJS());

export default makeSelectProductListContainer;
export { selectProductListContainerDomain };
