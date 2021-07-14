
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numberCog: 0,
      // displayFavorite: false,
    }
  };

  addFavorite = () => {
    this.setState({
      numberCog: this.state.numberCog + 1,
    })
  };

  // favoriteDisplayed = () => {
  //   this.setState({
  //     displayFavorite: true,
  //   })
  // };

  render() {
    return (
      <Card className="hornedBeast">
        <h2>{(this.props.title)}</h2>
        <img onClick={this.addFavorite} src={this.props.image_Url} alt ={this.props.description}></img>
        <p>{this.state.numberCog} 🖤</p>
        <p>{(this.props.description)}</p>
        <p>{(this.props.keyword)}</p>
        <p>{(this.props.horns)}</p>
        {/* Still in development*/}
        {/* <p>{this.state.displayFavorite ? '🖤' : ''}</p> */}
        <Button onClick={this.addFavorite}>favorite</Button>
      </Card>
    )
  }
}

export default HornedBeast;
