import React from 'react'
import {Link} from 'react-router-dom';

import Hero from '../UI/Hero/Hero';
import Banner from '../UI/Banner/Banner';
import Services from './Services/Services';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';

const Home = () => {
    return (
        <>
            <Hero hero='defaultHero'>
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>Our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;
