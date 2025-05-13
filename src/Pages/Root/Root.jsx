import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
            <ToastContainer></ToastContainer>
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