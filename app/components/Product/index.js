/**
 *
 * Product
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../styled/index';
// import styled from 'styled-components';

import styles from './styles.css';

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
    }),
    toggleProduct: PropTypes.func.isRequired,
  };

  toggleProduct = () => this.props.toggleProduct(this.props.product);

  render() {
    return (
      <div className={styles.product}>
        <img
          className={styles.image}
          src="https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw926c349a/images/hi-res/94199_1.jpg?sw=2000&sh=2000&sm=fit"
        />
        <p className={styles.text}>{this.props.product.name}</p>
        <p className={styles.text}>${this.props.product.price}</p>
        <StyledButton color="primary" onClick={this.toggleProduct}>
          Detail
        </StyledButton>
      </div>
    );
  }
}

export default Product;
