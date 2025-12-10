import React from 'react'
import Carousel from './Carousel.jsx'
import CarouselCard from './CarouselCard.jsx'
 
const Homepage = () => {
  return (
    <div>
       <Carousel />
      <CarouselCard sectionName={'Mens Kurta'} />
      <CarouselCard sectionName={'Mens Shoes'} />
      <CarouselCard sectionName={'Mens Shirt'} />
      <CarouselCard sectionName={'Womens Saree'} />
      <CarouselCard sectionName={'Womens Dress'} />
    </div>
  )
}

export default Homepage
