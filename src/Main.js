import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

import HornedBeast from './HornedBeast.js';




class Main extends React.Component {

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

    return (
      <main>
        <CardColumns>
          {dataResult}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
