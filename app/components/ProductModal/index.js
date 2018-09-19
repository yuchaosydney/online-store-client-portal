/**
 *
 * ProductModal
 *
 */

import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

class ProductModal extends React.Component {

  static propTypes = {
    toggledProduct: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
    }),
    toggleProduct: PropTypes.func.isRequired
  };

  render() {
    return (
      <Modal isOpen={!!this.props.toggledProduct} toggle={this.props.toggleProduct}>
        <ModalHeader toggle={this.props.toggleProduct}>{this.props.toggledProduct.name}</ModalHeader>
        <ModalBody>
          <p>Price: {this.props.toggledProduct.price}</p>
          <p>Detials: {this.props.toggledProduct.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleProduct}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleProduct}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ProductModal;
