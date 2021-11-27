import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/total-shape-yn8KzjHGtak-unsplash.jpg';
import banner2 from '../../../images/banner/kelly-sikkema-UaO58q6ioxI-unsplash.jpg';
import banner3 from '../../../images/banner/zach-vessels-WxRd7byFxs4-unsplash.jpg';

const Banner = () => {
    return (
        <div className=" banner">

            <Carousel
                style={{
                    margin: 'auto',
                    maxHeight: '500px'
                }}
            >
                <Carousel.Item interval={1000}>
                    <img
                        style={{
                            width: '100%', height: '500px'
                        }}
                        className="d-block w-100"
                        src={banner1}
                        alt="Health Care"
                    />
                    <Carousel.Caption>
                        <h3>Health Care</h3>
                        <p>The range of home health care services a patient can receive at home is limitless</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{
                            width: '100%', height: '500px'
                        }}
                        className="d-block  w-100"
                        src={banner2}
                        alt="Health Care"
                    />
                    <Carousel.Caption>
                        <h3>Health Care</h3>
                        <p>The range of home health care services a patient can receive at home is limitless</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            width: '100%', height: '500px'
                        }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Health care"
                    />
                    <Carousel.Caption>
                        <h3>Health Care</h3>
                        <p>The range of home health care services a patient can receive at home is limitless</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;