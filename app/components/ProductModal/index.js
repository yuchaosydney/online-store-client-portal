/**
 *
 * ProductModal
 *
 */

import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PropTypes from 'prop-types';

function ProductModal({ toggledProduct, toggleProduct }) {
  return (
    <Modal isOpen={!!toggledProduct} toggle={toggleProduct}>
      <ModalHeader toggle={toggleProduct}>
        {toggledProduct ? toggledProduct.name : ''}
      </ModalHeader>
      <ModalBody>
        <p>Price: {toggledProduct ? toggledProduct.price : ''}</p>
        <p>Detials: {toggledProduct ? toggledProduct.description : ''}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleProduct}>
          Do Something
        </Button>{' '}
        <Button color="secondary" onClick={toggleProduct}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

ProductModal.propTypes = {
  toggledProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }),
  toggleProduct: PropTypes.func.isRequired,
};

export default ProductModal;
