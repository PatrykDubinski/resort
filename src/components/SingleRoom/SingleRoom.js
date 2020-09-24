import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';

import {RoomContext} from '../../context/context';
import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../UI/Banner/Banner';
import StyledHero from '../UI/Hero/StyledHero/StyledHero';

const SingleRoom = (props) => {

    const state = useState({
        slug: props.match.params.slug,
        defaultBcg
    })[0];

    const {getRoom} = useContext(RoomContext);
    
    const room = getRoom(state.slug);
    console.log(room);

    if(!room){
        return <div className='error'>
            <h3>no such room could be found...</h3>
            <Link to='/rooms' className='btn-primary'>back to rooms</Link>
        </div>
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

    const [mainImg, ...defaultImg] = images;

    return (
        <>
            <StyledHero img={mainImg || state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {defaultImg.map((img, i) => {
                        return <img key={i} src={img} alt={name} />
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                    {extras.map((extra, i) => {
                        return <li key={i}>- {extra}</li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
