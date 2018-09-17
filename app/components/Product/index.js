/**
 *
 * Product
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styles from './styles.css';

function Product({ product }) {
  // console.log('--------style---------', style);
  return (
    <div className={styles.product}>
      {product.name}
      {product.price}
      {product.images}
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }),
};

export default Product;
