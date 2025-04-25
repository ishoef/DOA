import React from 'react';
import { ScanFace } from 'lucide-react';
import { Link } from 'react-router';
import Header from '../../Components/Header/Header';

const LoginError = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='w-[80%] mx-auto h-[75vh] flex justify-center items-center'>
                <div className='flex flex-col gap-4 items-center'>
                    <ScanFace color='red' size={100} />
                    <h1 className='text-3xl text-center'><span className='text-red-600 font-semibold'>Ooops!</span> The page you are looking for doesn't exist</h1>
                    <p className='text-center'>it seems like the page you are trying to access is either removed or never existed</p>
                    <Link to='/'><button className='btn rounded-3xl text-white bg-[#0EA106] text-[18px] hover:bg-[#153151] '>Go Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LoginError;