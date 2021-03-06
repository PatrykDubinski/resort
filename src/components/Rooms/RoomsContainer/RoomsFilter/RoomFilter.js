import React, {useContext} from 'react'

import {RoomContext} from '../../../../context/context';
import Title from '../../../Home/Title/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = (props) => {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    let types = getUnique(props.rooms, 'type')

    types = ['all', ...types];

    types = types.map((item, i) => (
        <option value={item} key={i}>{item}</option>
    ))

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
            </form>
        </section>
    )
}

export default RoomFilter
