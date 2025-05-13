import React from 'react';
import UILoader from '../../Components/Loader/UILoader';
import Drag from '../../Components/MitionTest/Drag';


const Contact = () => {
    return (
        <div>
            <h1>this is the contact page</h1>
            <div className=' w-fit mx-auto'>
                <UILoader></UILoader>
                <Drag></Drag>
                
            </div>
        </div>
    );
};

export default Contact;