/**
 *
 * ProductList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styles from './styles.css';

function ProductList() {
  return (
    <div className={styles.ProductList}>
      <h1 className={styles.icon}>Product List from component</h1>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;
