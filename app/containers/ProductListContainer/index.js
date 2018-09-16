/**
 *
 * ProductListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProductList from '../../components/ProductList';
import { requestProducts } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ProductListContainer extends React.Component {
  
  componentWillMount() {
    this.props.requestProducts();
  }

  render() {
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  requestProducts: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectProductListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestProducts: () => dispatch(requestProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productListContainer', reducer });
const withSaga = injectSaga({ key: 'productListContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductListContainer);
