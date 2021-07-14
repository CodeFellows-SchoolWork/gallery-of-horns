import React from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast.js';

// data.forEach

class Main extends React.Component {
  render() {
    const dataCog = (data) => {
      const objArr = [];
      data.forEach(obj => {
        const itemToRender = <HornedBeast
          title={obj.title}
          image_url={obj.image_url}
          description={obj.description}
          keyword={obj.keyword}
          horns={obj.horns}
        />
        objArr.push(itemToRender);
      });
      return objArr;
    };


    

    return (
      <main>
        {dataCog(data)}
      </main>
    )
  }
}

export default Main;
