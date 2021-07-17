import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import data from './data.json'
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    const dataResult = data.map((obj, idx) => (
      <HornedBeast
        key={idx}
        title={obj.title}
        image_url={obj.image_url}
        description={obj.description}
        keyword={obj.keyword}
        horns={obj.horns}
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
