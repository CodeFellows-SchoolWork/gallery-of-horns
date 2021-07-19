import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      selectedBeast: {
        title: '',
        description: '',
        image_url: '',
      },
    };
  };

  handleDisplayModal = (key) => {
    this.setState({
      displayModal: true,
      selectedBeast: {
        title: data[key].title,
        description: data[key].description,
        image_url: data[key].image_url,
      },
    });
  };

  handleCloseModal = () => {
    console.log('Made it to the close function');
    this.setState({
      displayModal: false,
    });
  };


  render() {
    return (
      <>
        <Header />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          handleShowModal={this.state.displayModal}
          handleCloseModal={this.handleCloseModal}
        />
        <Main
          data={data}
          handleDisplayModal={this.handleDisplayModal}
        />
        <Footer />
      </>
    )
  }
}


export default App;
