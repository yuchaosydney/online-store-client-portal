/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Product from '../Product';

import styles from './styles.css';

function ProductList({ products }) {

  const productNodes = products.map(product => (
    <Product 
      key={product._id}
      product={product}
    />
  ));

  return (
    <div className={styles.ProductList}>
      <h1 className={styles.icon}>Product List from component</h1>
      {productNodes}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
  }))
};

export default ProductList;
