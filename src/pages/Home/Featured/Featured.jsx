import { useEffect, useState } from 'react';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Featured = () => {
    const [dates, setDates] = useState('');
    const today = Date.now();
    useEffect(() => {
        setDates(new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(today));
    }, [today])


    return (
        <section className='featured-bg bg-fixed'>
            <SectionTitle heading='From our menu'
                subHeading={'check it easy'}>
            </SectionTitle>
            <div className='md:flex justify-center items-center mb-12 text-white mx-8 py-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-6'>
                    <p>{dates}</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus at aperiam itaque, repellendus laudantium quaerat in ipsam ipsa labore molestias aut saepe deserunt debitis esse, expedita, delectus sequi cum.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;