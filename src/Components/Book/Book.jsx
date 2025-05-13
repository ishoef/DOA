import { PenLine, Star } from 'lucide-react';
import React from 'react';
import { motion } from "motion/react"
import { FaStar } from 'react-icons/fa';

const Book = ({ book }) => {
    

    const formatDownloads = (num) => {
      if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
      if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
      return num;
    };

    const {bookName, Writer, Rating, PublishDate, Price, Publisher, Availability, BookPhoto, reviews } = book;
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="hover:scale-102 transition-all cursor-pointer p-5 border border-gray-200 rounded-2xl flex flex-col gap-4"
      >
        <div>
          <img src={BookPhoto} alt="" />
        </div>
        <div className>
          <h1 className="text-2xl font-semibold mb-2">{bookName}</h1>
          <p className="flex gap-3 font-semibold">
            {" "}
            <PenLine /> {Writer}
          </p>
        </div>
        <hr className="border-gray-300"></hr>
        <div>
          <h1>
            {" "}
            <span className="font-semibold">Publisher : </span>
            {Publisher}
          </h1>
          <p>
            {" "}
            <span className="font-semibold">Publish Date :</span> {PublishDate}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            {" "}
            <span className="font-semibold">Total Reviews :</span>{" "}
            {formatDownloads(reviews)}
          </p>
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Rating ? "text-orange-500" : "text-orange-200"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({Rating})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Price : $<strong> {Price}</strong>
          </p>
          <p
            className={
              Availability === "Out of Stock"
                ? "text-red-600"
                : "text-green-500"
            }
          >
            {Availability}
          </p>
        </div>
        <button className=" btn hover:bg-[#153151] bg-[#5894fc] text-white">
          Buy Now
        </button>
      </motion.div>
    );
};

export default Book;