import React from 'react';
import HomeCardInfo from './HomeCardInfo';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const HomeInfo= () => {
    return (
        <div className='px-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <HomeCardInfo bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} title='Opening Hours' text='Lorem Ipsum is simply dummy text '></HomeCardInfo>
            <HomeCardInfo bgClass="bg-accent" img={marker} title='Visit our location' text='Brooklyn, NY 10036, United States'></HomeCardInfo>
            <HomeCardInfo bgClass="bg-gradient-to-r from-secondary to-primary"  img={phone} title='Contact us now' text='+000 123 456789'></HomeCardInfo>
        </div>
    );
};

export default HomeInfo;