import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../../Components/Book/Book';
import { BookOpen, LibraryBig } from 'lucide-react';

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    
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
        <div>
            <div className='bg-gray-200 text-center py-10 my-5 rounded-2xl'>
                <h1 className='text-3xl font-semibold flex items-center gap-4 justify-center'> <LibraryBig size={30} /> All Books</h1>
                <p className='px-40 mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore rerum ipsum sapiente similique sed accusantium soluta error et, mollitia illo corporis officia alias perferendis, odit ab suscipit illum at eius.</p>
            </div>

           <div className='flex gap-5' >
                <div className='basis-[1000px]'>
                    <div className='border p-2 rounded-2xl border-gray-300'>
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

                <div className='border border-gray-300 grid gap-5 grid-cols-3 p-5 rounded-2xl'>
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Books;