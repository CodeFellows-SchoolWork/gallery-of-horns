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
    console.log(data[key], typeof key);
    this.setState({
     displayModal: true,
     selectedBeast: {
       title: data[key].title,
       description: this.description,
       image_url: this.image_url,
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
          selectedBeast = {this.state.selectedBeast}
          // key={this.state.idx}
          title={this.state.title}
          // image_url={this.state.image_url}
          // description={this.state.description}
          // keyword={this.state.keyword}
          // horns={this.state.horns}
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
