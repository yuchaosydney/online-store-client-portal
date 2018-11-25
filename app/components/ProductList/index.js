/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

import Product from '../Product';

import styles from './styles.css';

function ProductList({ products }) {
  const productNodes = products.map(product => (
    <Col xs={6} md={4} key={product._id}>
      <Product product={product} />
    </Col>
  ));

  return (
    <div className={styles.ProductList}>
      <h1 className={styles.icon}>Product List from component</h1>
      <Grid>
        <Row>{productNodes}</Row>
      </Grid>
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
