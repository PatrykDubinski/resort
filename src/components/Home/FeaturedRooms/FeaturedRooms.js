import React, { useContext } from 'react'

import {RoomContext} from '../../../context/context';
import Loading from '../../UI/Loading/Loading';
import Room from '../../Rooms/Room/Room';
import Title from '../Title/Title';

const FeaturedRooms = () => {
    const {loading, featuredRooms} = useContext(RoomContext);

    const rooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room} />
    })
    return (
        <section className='featured-rooms'>
            <Title title='featured-rooms' />
            <div className='featured-rooms-center'>
                {loading ? <Loading /> : rooms}
            </div>
        </section>
    )
}

export default FeaturedRooms
