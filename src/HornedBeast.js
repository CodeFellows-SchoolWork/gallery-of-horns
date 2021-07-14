
import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numberCog: 0,
      displayFavorite: false,
    }
  };

  addFavorite = () => {
    this.setState({
      numberCog: this.state.numberCog + 1,
    })
  };

  favoriteDisplayed = () => {
    this.setState({
      displayFavorite: true,
    })
  };

  render() {
    return (
      <article className="hornedBeast">
        <h2>{(this.props.title)}</h2>
        <img src={this.props.image_Url} alt ={this.props.description}></img>
        <p>{this.state.numberCog} Liked</p>
        <p>{this.state.displayFavorite ? '🖤' : ''}</p>
        <p>{(this.props.description)}</p>
        <p>{(this.props.keyword)}</p>
        <p>{(this.props.horns)}</p>
        <button onClick={this.addFavorite}>favorite</button>
      </article>
    )
  }
}

export default HornedBeast;
