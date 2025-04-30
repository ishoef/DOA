import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Root = () => {
    return (
        <>
            <div className='sticky top-0 z-50'>
                <Header></Header>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </>
    );
};

export default Root;