import React from 'react';
import CountUp from 'react-countup';


const SingleState = ({statistic}) => {
    
    const {title, value, description} = statistic;

    return (
        <>
            <div className=" py-6 shadow bg-gray-100 rounded-md">
                <div className="flex flex-col justify-center gap-3 items-center">
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="text-4xl font-bold"><CountUp enableScrollSpy end={value} duration={5} ></CountUp>+</p>
                    <p className="">{description}</p>
                </div>
            </div>
        </>         
    );
};

export default SingleState;