import React from 'react'

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from '../Title/Title';

const Services = () => {

    const services = [{
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend neque at sem dignissim hendrerit. Donec porta urna et mauris aliquam, eu auctor nulla luctus. Fusce at tellus leo.'
    },
    {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend neque at sem dignissim hendrerit. Donec porta urna et mauris aliquam, eu auctor nulla luctus. Fusce at tellus leo.'
    },
    {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend neque at sem dignissim hendrerit. Donec porta urna et mauris aliquam, eu auctor nulla luctus. Fusce at tellus leo.'
    },
    {
        icon: <FaBeer />,
        title: 'strongest beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend neque at sem dignissim hendrerit. Donec porta urna et mauris aliquam, eu auctor nulla luctus. Fusce at tellus leo.'
    }];

    const servicesRender = services.map((service, i) => {
        return <article key={i} className='service'>
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
        </article>
    })

    return (
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {servicesRender}
            </div>
        </section>
    )
}

export default Services
