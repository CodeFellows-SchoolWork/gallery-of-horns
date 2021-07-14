import React from 'react';
// import data from './data.json'
import HornedBeast from './HornedBeast.js';

// data.forEach

class Main extends React.Component {
  render() {
    // const dataCog = (data) => {
    //   const objArr = [];
    //   data.forEach(obj => {
    //     objArr.push(obj);
    //   });
    //   return objArr;
    // };

    // const itemToRender = <HornedBeast
    //   title={data.title}
    //   image_Url={data.image_Url}
    //   description={data.description}
    //   keyword={data.keyword}
    //   horns={data.horns}
    // />

    // dataCog(data);

    return (
      <>
        <HornedBeast
        title={"1"}
        image_Url={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"}
        description={"TEST 1"}
        />
      </>
    )
  }
}

export default Main;
