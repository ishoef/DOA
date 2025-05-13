import React from 'react';

const CoursesCard = ({cardData}) => {

    const {CourseName, Instructor, Enrolled, Price, CoursePhoto} = cardData;

    return (
        <div className='hover:scale-102 transition-all cursor-pointer shadow bg-white flex flex-col justify-between gap-5 border border-gray-300 p-5 rounded-2xl'>
            <div>
                <img src="https://i.ibb.co/YBGvngJ5/Dars-6-Presentation.png" alt="CourseThambnail" />
                
            </div>
            <div className=''>
                <h1 className=' text-[20px] md:text-[24px] lg:text-[26px] font-semibold'>{CourseName}</h1>
                <p className='text-[18px] mt-2'>Ustaz : <span className='font-semibold hover:text-blue-800'>{Instructor}</span></p>
                <p className='mt-2'>Enrolled : {Enrolled}</p>
            </div>
            <hr className='border-gray-300 border' />
            <div className='flex items-center justify-between'>
                <p className='text-xl font-semibold'><span className={Price === 'Free' ? 'text-green-600' : 'text-black'}> {Price}</span></p>
                <button className='hover:scale-102 transition-all btn text-white px-7 text-[16px] bg-[#153151] '>Enroll Now</button>
            </div>
        </div>
    );
};

export default CoursesCard;