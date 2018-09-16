/**
 *
 * Product
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Product({product}) {
  return <div>
    {product.name}
    {product.price}
    {product.images}
  </div>;
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
  })
};

export default Product;
