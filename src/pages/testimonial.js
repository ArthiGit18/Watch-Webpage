import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        id: 1,
        text: "Great service! Highly recommend.",
        author: "John Doe"
    },
    {
        id: 2,
        text: "Fantastic experience from start to finish!",
        author: "Jane Smith"
    },
    {
        id: 3,
        text: "Very professional and friendly staff.",
        author: "Michael Brown"
    }
];

const Testimonial = () => {
    const settings = {
        dots: true, // 3 dots at the bottom
        infinite: true, // infinite scrolling
        speed: 500, // speed of transition
        slidesToShow: 1, // show one testimonial at a time
        slidesToScroll: 1,
        autoplay: true, // enable automatic scrolling
        autoplaySpeed: 3000, // auto-scroll every 3 seconds
        arrows: true, // left and right arrows
    };

    return (

        <div className="testimonial-container">
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-item">
                        <div className='testimonial_content'>
                            <p>"{testimonial.text}"</p>
                            <h4>- {testimonial.author}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
