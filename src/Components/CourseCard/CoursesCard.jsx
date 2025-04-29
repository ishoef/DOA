import React from 'react';

const CoursesCard = () => {
    return (
        <div className='hover:scale-102 transition-all cursor-pointer shadow bg-white flex flex-col justify-between gap-5 border border-gray-300 p-5 rounded-2xl'>
            <div>
                <img src="https://i.ibb.co/YBGvngJ5/Dars-6-Presentation.png" alt="CourseThambnail" />
            </div>
            <div className=''>
                <h1 className='text-3xl font-semibold'>Advance Arabic Language</h1>
                <p className='text-xl mt-2'>Ustaz : <span className='font-semibold hover:text-blue-600'>Ismail Nayef</span></p>
                <p>Enrolled : 120</p>
            </div>
            <hr className='border-gray-300 border' />
            <div className='flex items-center justify-between'>
                <p className='text-[18px] font-semibold'>Price : <span className='text-2xl'>৳</span> 2,500</p>
                <button className='btn text-white px-7 text-[16px] bg-[#153151] '>Enroll Now</button>
            </div>
        </div>
    );
};

export default CoursesCard;