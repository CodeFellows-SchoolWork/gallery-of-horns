
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberCog: 0,
      title: 'black',
      description: 'black',
      keyword: 'black',
      changeEmoji: '🖤',
    };
  };

  addFavorite = () => {
    this.setState({
      numberCog: this.state.numberCog + 1,
    });
  };

  changeTitleCss = () => {
    if (this.state.title === 'black') {
      this.setState({
        title: 'red'
      });
    }
    else {
      this.setState({
        title: 'black'
      });
    }
  };

  changeDescriptionCss = () => {
    if (this.state.description === 'black') {
      this.setState({
        description: 'blue'
      });
    }
    else {
      this.setState({
        description: 'black'
      });
    }
  };

  changeKeywordCss = () => {
    if (this.state.keyword === 'black') {
      this.setState({
        keyword: 'green'
      });
    }
    else {
      this.setState({
        keyword: 'black'
      });
    }
  };




  render() {
    return (
      <div id="cardDiv">
        <Card className="hornedBeast">
          <Card.Title
            style={{ color: this.state.title }}
            onClick={this.changeTitleCss}>{(this.props.title)}
          </Card.Title>

          <Card.Img
            onClick={() => this.props.handleDisplayModal(this.props.beast)}
            style={{ width: '18rem' }}
            src={this.props.image_url}
            alt={this.props.description}>
          </Card.Img>
          <div id="cardTextCon">
            <Card.Text id="numberCog">
              {this.state.numberCog} 🖤
            </Card.Text>

            <Card.Text id="description"
              style={{ color: this.state.description }}
              onClick={this.changeDescriptionCss}>
              {(this.props.description)}
            </Card.Text>

            <Card.Text id="keyWord"
              style={{ color: this.state.keyword }}
              onClick={this.changeKeywordCss}>
              {(this.props.keyword)}
            </Card.Text>
            {/* <p>{(this.props.horns)}</p> */}
            <Button variant="outline-dark"
              onClick={this.addFavorite}>favorite!
            </Button>
          </div>

        </Card>
      </div>
    )
  }
}

export default HornedBeast;
