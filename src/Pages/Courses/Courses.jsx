import { LibraryBig } from 'lucide-react';
import React from 'react';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import { SiGoogleclassroom } from "react-icons/si";


const Courses = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='bg-gray-200 text-center py-10 my-5 rounded-2xl'>
                <h1 className='text-3xl font-semibold flex items-center gap-4 justify-center'> <SiGoogleclassroom />                 All Courses</h1>
                <hr className='w-60 mx-auto mt-4 border-white border-2'></hr>
                <p className='px-40 mt-5'>Books are silent companions that whisper wisdom through every page.  
                They open doors to worlds unseen and minds yet unexplored.  
                In their quiet ink lies the power to change hearts and shape futures.  
                Each chapter is a journey, every word a step toward understanding.</p>
            </div>

            <PopularCourses></PopularCourses>
            
        </div>
    );
};

export default Courses;