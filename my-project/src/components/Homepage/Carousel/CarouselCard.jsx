import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Card';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { mens_kurta } from '../../../Data/mens_kurta';

const CarouselCard = ({ sectionName }) => {
   const responsive = {
        0: { items: 1 },
        650: { items: 2 },
        968: { items: 3 },
         1280: { items: 4 },
         1380: { items: 5 },
    };

    const items = mens_kurta.slice(0, 10).map((item, index) => (
        <div key={index} className="p-2">
            <Card product={item} />
        </div>
    ));

    return (
        <div className='relative px-4'>
            <h1 className='text-2xl ms-5 font-bold text-gray-900 tracking-wide'>
                {sectionName}
            </h1>
            <div className='relative   flex justify-center items-center pe-6'>

                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableDotsControls
                    // autoPlay
                    // autoPlayInterval={1000}
                    infinite
                    renderNextButton={({ isDisabled }) => (
                        <button className='absolute top-60 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md cursor-pointer z-10' disabled={isDisabled}>
                            <NavigateNextIcon />
                        </button>
                    )}
                    renderPrevButton={({ isDisabled }) => (
                        <button className='absolute top-60 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md cursor-pointer z-10' disabled={isDisabled}>
                            <NavigateNextIcon sx={{ transform: 'rotate(180deg)' }} />
                        </button>
                    )}
                />
            </div>
        </div>
    )
};

export default CarouselCard