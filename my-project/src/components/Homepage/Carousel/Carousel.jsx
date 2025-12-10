import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carouseldata } from './Carousel';

const Carousel = () => {

    const items = Carouseldata.map((item) => (
        <div key={item.img}>
            <img  className=' w-full h-[60vh] sm:h-[70vh]  md:h-[80vh] lg:h-[90vh]   object-cover"' src={item.img} alt="carousel" />
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default Carousel;
