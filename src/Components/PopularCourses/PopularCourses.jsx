import React from 'react';
import CoursesCard from '../CourseCard/CoursesCard';

const PopularCourses = () => {
    return (
        <div className='mt-20'>
                <div>
                    <h1 className='text-4xl mb-10 font-semibold border-l-8 border-l-[#153151] py-2 rounded pl-4'>Popular Courses</h1>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                    <CoursesCard></CoursesCard>
                </div>
            </div>
    );
};

export default PopularCourses;