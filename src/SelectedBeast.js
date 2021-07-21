import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.handleShowModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{width: '100%'}}
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.title} />
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
      </Modal>



    )
  }
}


export default SelectedBeast;
