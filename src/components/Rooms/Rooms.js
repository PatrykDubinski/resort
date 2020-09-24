import React from 'react'
import {Link} from 'react-router-dom';

import Hero from '../UI/Hero/Hero';
import RoomsContainer from './RoomsContainer/RoomsContainer';
import Banner from '../UI/Banner/Banner';

const Rooms = () => {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms;
