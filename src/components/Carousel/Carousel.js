import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../../components/Carousel/Carousel.scss"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselProject = (props) => {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
        >
            {props.images.map((image, index) => (
                <div key={index} className='carouselContainer '>
                    <img src={image} alt="diapo images projet" />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselProject;