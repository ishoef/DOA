import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import Stat from '../../Components/Stat/Stat';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';

const Home = () => {

    const style = "mt-70 md:mt-75 lg:mt-20";
    useEffect (() => {
        document.title = "Home | DOA";
      }, []);
    return (
        <div>
            <Hero></Hero>
            <Stat></Stat>
            <div className='w-11/12 lg:w-[80%] mx-auto mt-42'>
                <PopularCourses className={style}></PopularCourses>
            </div>
        </div>
    );
};

export default Home;