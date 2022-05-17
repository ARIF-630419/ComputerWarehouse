import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner/banner1.jpg'
import banner2 from '../../../img/banner/banner2.jpg'
import banner3 from '../../../img/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100  height"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We really listen</h3>
                    <p>With a mostly bilingual staff, our healthcare team can understand and address your true needs  allowing you to feel comfortable and respected.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 height"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3 >Help you can count on</h3>
                    <p>We help you navigate the complexities of healthcare reform, fill out insurance forms, and stay in touch until applications are approved.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 height"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption >
                    <h3>Comprehensive care</h3>
                    <p>
                        We offer medical, dental, womens health services, mental/behavioral health services, pharmacy and chiropractic care everything you and your family need to get and stay healthy.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;