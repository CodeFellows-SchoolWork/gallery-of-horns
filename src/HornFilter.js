import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class HornFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'user',
      NumOfHorns: 100,
    };
  };

  handleChange = e => {
    this.setState({
      year: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Form id="myForm" onSubmit={this.handleChange}>
            <Form.Group>
              <Form.Label>Select Number Of Horns!</Form.Label>
                <Form.Select onChange={this.handleChange}>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
          </Form>

        </Container>
      </>



    );
  };
};
// export default HornFilter;
