import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    console.log(this.props.selectedBeast);
    return (
      <Modal
        show={this.props.handleShowModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>



    )
  }
}


export default SelectedBeast;
