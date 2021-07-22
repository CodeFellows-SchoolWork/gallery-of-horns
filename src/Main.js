import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast.js';




class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: this.props.data
    };
  };

  handleChange = e => {
    let numHorns = e.target.value;
    numHorns = parseInt(numHorns);
    console.log(typeof (numHorns));
    console.log(this.props.data);
    let newGallery = this.props.data.filter(beast => beast.horns === numHorns);
    console.log(newGallery);
    return this.setState({ gallery: newGallery});
  };

  render() {
    console.log(this.state);
    const dataResult = this.state.gallery.map((beast, idx) => (
      <HornedBeast
        key={idx}
        x={idx}
        beast={beast}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        handleDisplayModal={this.props.handleDisplayModal}
      />
    ));

    const numOfHorns =
      <Container>
        <Form id="myForm" >
          <Form.Group>
            <Form.Label>Select Number Of Horns!</Form.Label>
            <Form.Control onChange={this.handleChange} as="select" custom>
              <option value="">Please Select:</option>
              <option value="1">One Or Less</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">All The Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>

      </Container>

    return (
      <main>

        {numOfHorns}

        <CardColumns>
          {dataResult}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
