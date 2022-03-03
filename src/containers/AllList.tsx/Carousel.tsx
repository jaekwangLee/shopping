import React from 'react';
import Slider from 'react-slick';
import { EventSliderContainer } from './Style';

const EventSlider = ({ items, options }: { items: Array<any>; options?: any; }) => {
    const settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        ...options
    }

    return (
        <EventSliderContainer>
            <Slider { ...settings }>
                { 
                    items.map((event, index) => (
                        <div key={'event-key-' + index}>{ event }</div>
                    )) 
                }
            </Slider>
        </EventSliderContainer>
    )
}

export default EventSlider