import React from 'react';

const ScrollToTop = () => {
    return (
        <div className='w-fit h-fit fixed z-50 bottom-12 right-12 cursor-pointer bg-[#153151] py-1 text-white px-4'>
            <div onClick={() => {
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0
                })
            }} className='text-4xl'>↑</div>
        </div>
    );
};

export default ScrollToTop;