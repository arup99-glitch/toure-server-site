import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Services from '../Services/Services';
import Video from '../Video/Video';
import LatestNews from '../LatestNews/LatestNews'
import Registration from '../../Registration/Registration';

const Home = () => {
    return (
        <div id="home">
            <Container>
                <Banner></Banner>
                <Services></Services>
                <Video></Video>
                <LatestNews></LatestNews>
                
            </Container>

        </div>
    );
};

export default Home;