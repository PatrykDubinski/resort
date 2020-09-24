import React, { useState, useEffect } from 'react';
import items from '../data';

const RoomContext = React.createContext();

const RoomProvider = (props) => {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    });

    //getData function
    useEffect(() => {
        const rooms = formatData(items);
        const featuredRooms = rooms.filter(room => room.featured === true);
        const maxPrice = Math.max(...rooms.map(room => room.price))
        const maxSize = Math.max(...rooms.map(room => room.size))
        setState({
            ...state,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }, []);

    const formatData = (items) => {
        const tempItems = items.map(item => {
            const id = item.sys.id;
            const images = item.fields.images.map(img => img.fields.file.url);
            const room = {
                ...item.fields,
                images: images,
                id: id
            }
            return room
        })
        return tempItems
    }

    const getRoom = (slug) => {
        const tempRooms = [...state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = e.type === 'checkbox' ? target.checked : target.value;
        const name = e.target.name;
        setState({
            ...state,
            [name]: value,
        }, filterRooms(value));
    }

    const filterRooms = (type) => {
        const {rooms, capacity, price, minSize, maxSize, breakfast, pets} = state;
        let tempRooms = [...rooms];
        console.log(type);
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        console.log(state, tempRooms);
        setState({
            ...state,
            sortedRooms: tempRooms
        })
        console.log(state.sortedRooms);
    }

    return (
        <RoomContext.Provider value={{...state, getRoom, handleChange}}>{props.children}</RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;



export {RoomProvider, RoomConsumer, RoomContext};