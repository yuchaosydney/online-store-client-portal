/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

import Product from '../Product';

import styles from './styles.css';

function ProductList({ products }) {
  
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

  const productNodes = products => products && products.length ? products.map(product => (
    <Col xs="3" className={styles.column} key={product._id}><Product product={product} /></Col>
  )) : [];

  const productListNodes = formattedProductList.map((list, index) => (
    <Row key={index}>
      {productNodes(list)}
    </Row>
  ));

  return (
    <div className={styles.ProductList}>
      <Container>
        {productListNodes}
      </Container>
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
};

export default ProductList;
