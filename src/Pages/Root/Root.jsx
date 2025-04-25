import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[90%] lg:w-[80%] mx-auto mb-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;