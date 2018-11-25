/**
 *
 * Product
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
// import styled from 'styled-components';

function Product({ product }) {
  const imageNode = product.images.map((img, index) => (
    <Carousel.Item key={index}>
      <img width="100%" height="100%" alt="900x500" src={img} />
    </Carousel.Item>
  ));
  return (
    <div>
      {product.name}
      {product.price}
      <Carousel>{imageNode}</Carousel>
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
