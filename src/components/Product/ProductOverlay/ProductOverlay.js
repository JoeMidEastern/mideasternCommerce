import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ProductOverlay({ product }) {
  const createMarkup = () => {
    return {
      __html: product.description,
    };
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <p variant="primary" onClick={() => setShow(true)}>
        Read More
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={createMarkup()}></Modal.Body>
      </Modal>
    </>
  );
}

export default ProductOverlay;
