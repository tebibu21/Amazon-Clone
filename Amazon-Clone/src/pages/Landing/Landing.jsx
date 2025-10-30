import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import CarouselEffect from "../../components/Carousel/CarouselEffect";
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'



function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
