import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import Stat from '../../Components/Stat/Stat';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';

const Home = () => {
    useEffect (() => {
        document.title = "Home | DOA";
      }, []);
    return (
        <div>
            <Hero></Hero>
            <Stat></Stat>
            <div className='w-[80%] mx-auto mt-42'>
                <PopularCourses></PopularCourses>
            </div>
        </div>
    );
};

export default Home;