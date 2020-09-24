import React from 'react'

import RoomsFilter from './RoomsFilter/RoomFilter';
import RoomsList from './RoomsList/RoomsList.js';
import {RoomConsumer} from '../../../context/context';
import Loading from '../../UI/Loading/Loading';

const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value;

                    if(loading){
                        return <Loading />
                    }
                    return  (
                        <div>
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}

export default RoomsContainer
