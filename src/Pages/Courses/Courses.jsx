import { LibraryBig } from 'lucide-react';
import React, { useEffect } from 'react';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import { SiGoogleclassroom } from "react-icons/si";


const Courses = () => {

    const coursePageStyle = "mt-10 md:mt-15 lg:mt-20";
    useEffect (() => {
            document.title = "Courses | DOA";
          }, []);
    return (
      <div className="w-11/12 lg:w-[80%] mx-auto">
        <div className="bg-gray-200 text-center py-10 my-5 rounded-2xl">
          <h1 className="text-3xl font-semibold flex items-center gap-4 justify-center">
            {" "}
            <SiGoogleclassroom /> All Courses
          </h1>
          <hr className="w-60 mx-auto mt-4 border-white border-2"></hr>
          <p className="px-3 md:px-14 lg:px-40 mt-5 md:text-xl">
            Books are silent companions that whisper wisdom through every page.
            They open doors to worlds unseen and minds yet unexplored. In their
            quiet ink lies the power to change hearts and shape futures. Each
            chapter is a journey, every word a step toward understanding.
          </p>
        </div>

        <PopularCourses className={coursePageStyle}></PopularCourses>
      </div>
    );
};

export default Courses;