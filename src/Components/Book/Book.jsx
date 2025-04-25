import { PenLine, Star } from 'lucide-react';
import React from 'react';

const Book = ({book}) => {

    const {bookName, Writer, Rating, PublishDate, Price, Publisher, Availability, BookPhoto, reviews } = book;
    return (
        <div className='p-5 border border-gray-200 rounded-2xl flex flex-col gap-4'>
            <div>
                <img src={BookPhoto} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-2'>{bookName}</h1>
                <p className='flex gap-3 font-semibold'> <PenLine /> {Writer}</p>
            </div>
            <hr className='border-gray-300'></hr>
            <div>
                <h1> <span className='font-semibold'>Publisher : </span>{Publisher}</h1>
                <p> <span className='font-semibold'>Publish Date :</span> {PublishDate}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p> <span className='font-semibold'>Total Reviews :</span> {reviews}</p>
                <p className='flex items-center gap-1'>
                    <p className='text-[17px]'>{Rating} </p>
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                </p>
            </div>
            <div className='flex items-center justify-between'>
                <p>Price : <strong> ${Price}</strong></p>
                <p className='text-green-500'>{Availability}</p>
            </div>
            <button className='btn hover:bg-[#153151] hover:text-white'>Buy Now</button>
        </div>
    );
};

export default Book;