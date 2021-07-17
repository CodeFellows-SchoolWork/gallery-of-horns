import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json'
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      selectedBeast: {}, 
    };
  };

  handleDisplayModal = () => {
    this.setState({
     displayModal: true,
     selectedBeast: {
       title: this.title,
     },
    });
  };

    handleCloseModal = () => {
      this.setState({
        displayModal:false,
      });
    };


  render() {
    return (
      <>
        <Header />
        <SelectedBeast
        // title="TITLE"
          key={this.state.idx}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          keyword={this.state.keyword}
          horns={this.state.horns}
          handleShowModal={this.state.displayModal}
          handelCloseModal={this.state.handelCloseModal}
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
