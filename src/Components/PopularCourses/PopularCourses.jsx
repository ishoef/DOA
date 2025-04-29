import { useEffect, useState } from 'react';
import CoursesCard from '../CourseCard/CoursesCard';

const PopularCourses = () => {

    const [courseCards, setCourseCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/Jsons/CourseList.json');
                const data = await res.json();
                setCourseCards(data);
            }
            catch(error) {
                console.log('error from courseCard', error);
            }
        }
        fetchData();
    },[])

    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-4xl mb-10 font-semibold border-l-8 border-l-[#153151] py-2 rounded pl-4'>Popular Courses</h1>
            </div>
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab text-xl" aria-label="Paid Courses" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            courseCards.map(cardData => <CoursesCard key={cardData.id} cardData={cardData}></CoursesCard>)
                        }
                    </div>
                   
                </div>

                <input type="radio" name="my_tabs_3" className="tab text-xl" aria-label="Free Course" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            courseCards.map(cardData => <CoursesCard key={cardData.id} cardData={cardData}></CoursesCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;