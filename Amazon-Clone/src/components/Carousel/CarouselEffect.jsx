import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import classes from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselEffect() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicator={false}
      showThumbs={false}
      >
        {
            img.map((imageItemLink)=>{
                return <img src={imageItemLink} />;
            })
        }
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect;
