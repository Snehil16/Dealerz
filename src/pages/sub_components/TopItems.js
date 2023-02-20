import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TopItems = ({products}) => {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {products.map(product => (
            <Item
            product={product}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default TopItems;