/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import Product from '../Product';
import ProductModal from '../ProductModal';

import styles from './styles.css';

function ProductList({ products, toggleProduct, toggledProduct }) {
  const COLUMN_NUM = 4;
  const formattedProductList = [];

  if (products.length) {
    products.forEach((product, index) => {
      const listIndex = Math.floor(index / COLUMN_NUM);
      if (formattedProductList[listIndex] === undefined) {
        formattedProductList[listIndex] = [];
      }
      formattedProductList[listIndex].push(product);
    });
  }

  const productNodes = productList => {
    console.log('------------', toggleProduct);
    return productList && productList.length
    ? productList.map(product => (
      /*eslint-disable */
      <Col xs="3" className={styles.column} key={product._id}>
        <Product product={product} toggleProduct={toggleProduct} />
      </Col>
    ))
    : [];
  }

  const productListNodes = formattedProductList.map((list, index) => (
    <Row className={styles.row} key={index}>
      {productNodes(list)}
    </Row>
  ));

  return (
    <div className={styles.productList}>
      <Container>{productListNodes}</Container>
      <ProductModal
        toggledProduct={toggledProduct}
        toggleProduct={toggleProduct}
      />
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
    }),
  ),
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  toggleProduct: PropTypes.func.isRequired,
  toggledProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }),
};

export default ProductList;
