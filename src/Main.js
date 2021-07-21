import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast.js';




class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     horns: 100,
    };
  };

  handleChange = e => {
    this.setState({
      horns: parseInt(e.target.horns.value),
    });
  };

  render() {
    const dataResult = this.props.data.map((obj, idx) => (
      <HornedBeast
        key={idx}
        x={idx}
        title={obj.title}
        image_url={obj.image_url}
        description={obj.description}
        keyword={obj.keyword}
        horns={obj.horns}
        handleDisplayModal={this.props.handleDisplayModal}
      />
    ));

    const numOfHorns =
      <Container>
        <Form id="myForm" onChange={this.handleChange}>
          <Form.Group>
            <Form.Label>Select Number Of Horns!</Form.Label>
            <Form.Control name='horns' as="select" custom>
              <option>Please Select:</option>
              <option value={1}>One Or Less</option>
              <option value={2}>Two</option>
              <option value={100}>Three Or More</option>
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
