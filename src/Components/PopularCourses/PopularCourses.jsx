import { useEffect, useState } from 'react';
import CoursesCard from '../CourseCard/CoursesCard';
import { BookOpen } from 'lucide-react';

const PopularCourses = () => {

    const [courseCards, setCourseCards] = useState([]);
    // const [showAll, setShowAll] = useState(false);

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
    },[]);

    const paidCourse = courseCards.map(course => {
        
    });
    console.log(paidCourse);

    const booksCate = [
        { "id": 1, "name": "Arabic" },
        { "id": 2, "name": "Islamic" },
        { "id": 3, "name": "Quranic" },
        { "id": 4, "name": "Youth" },
        { "id": 5, "name": "Hadis" },
        { "id": 6, "name": "Tafsir" },
        { "id": 7, "name": "Falsafa" },
        { "id": 8, "name": "Aqidah" },
        { "id": 9, "name": "Nahu" },
        { "id": 10, "name": "Sarf" },
        { "id": 11, "name": "History" },
        { "id": 12, "name": "Story" },
        { "id": 13, "name": "Culture" },
        { "id": 14, "name": "Theology" },
        { "id": 15, "name": "Science" },
        { "id": 16, "name": "Philosophy" },
        { "id": 17, "name": "Literature" },
        { "id": 18, "name": "Dictionary" },
        { "id": 19, "name": "Development" },
        { "id": 20, "name": "Motivation" }
    ]

    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-4xl mb-10 font-semibold border-l-8 border-l-[#153151] py-2 rounded pl-4'>Popular Courses</h1>
            </div>
            <div className='flex gap-5'>
                <div className='basis-6xl'>
                    <div className='border p-2 rounded-2xl border-gray-300 z-0 sticky top-25'>
                        <h1 className='text-center text-xl font-semibold'>Books Category</h1>
                        <hr className='border-gray-300 mt-3'></hr>
                        <div className=' py-3 flex flex-col gap-2'>
                            {
                                booksCate.map(cate => <div>
                                    <div key={cate.id} className='flex items-center justify-between cursor-pointer hover:bg-gray-200 px-2 py-1 rounded'>
                                        <p className='text-[18px]'>{cate.name}</p>
                                        <p><BookOpen size={18} /></p>
                                    </div>
                                    <hr className='border-gray-100'></hr>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className="tabs tabs-lift">
                        <input type="radio" name="my_tabs_3" className="tab text-xl" aria-label="Paid Courses" defaultChecked />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <div className='grid grid-cols-3 gap-8'>
                                {
                                    courseCards.map(cardData => <CoursesCard key={cardData.id} cardData={cardData}></CoursesCard>)
                                }
                            </div>
                            <div className='w-fit h-fit mt-10 mx-auto'>
                                <button className='btn bg-[#153151] text-white'>Show All</button>
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
            </div>
        </div>
    );
};

export default PopularCourses;