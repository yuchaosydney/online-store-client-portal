/**
 *
 * Product
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
// import styled from 'styled-components';

import { StyledButton } from '../styled/index';

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
    const imageNode = this.props.product.images.map((img, index) => (
      <Carousel.Item key={index}>
        <img width="100%" height="100%" alt="900x500" src={img} />
      </Carousel.Item>
    ));

    return (
      <div className={styles.product}>
        <Carousel>{imageNode}</Carousel>
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
