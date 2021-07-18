import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
       show = {this.props.handleShowModal}
       onHide={this.props.handleCloseModal}   
      >
        <Modal.Title>{this.props.title}</Modal.Title>
        <Modal.Body>

        </Modal.Body>
      </Modal>



    )
  }
}







export default SelectedBeast;
