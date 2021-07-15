
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
      <Card className="hornedBeast">
        <h2
          style={{ color: this.state.title }}
          onClick={this.changeTitleCss}>{(this.props.title)}
        </h2>

        <img
          onClick={this.addFavorite}
          src={this.props.image_url}
          alt={this.props.description}>
        </img>

        <p id="numberCog"
          onClick={this.state.changeEmoji}>
          {this.state.numberCog} 🖤
        </p>

        <p id="description"
          style={{ color: this.state.description }}
          onClick={this.changeDescriptionCss}>
          {(this.props.description)}
        </p>

        <p id="keyWord"
          style={{ color: this.state.keyword }}
          onClick={this.changeKeywordCss}>
          {(this.props.keyword)}
        </p>
        {/* <p>{(this.props.horns)}</p> */}
        <Button variant="outline-dark"
          onClick={this.addFavorite}>favorite!
        </Button>

      </Card>
    )
  }
}

export default HornedBeast;
