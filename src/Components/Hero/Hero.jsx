import React, { useEffect, useRef, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router";
import VideoShowingModal from "../VideoShowingModal/VideoShowingModal";

const Hero = () => {
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  const [showVideo, setShowVideo] = useState(false);
  const modalRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showVideo]);

  return (
    <div className="bg-[#153151]">
      <div className=" text-white w-[80%] mx-auto flex justify-between items-center pt-20 pb-32">
        <div className="left flex flex-col gap-6 items-start">
          <div className="flex gap-5 items-center">
            <div className="w-5 h-5 animate-ping rounded-full bg-white flex justify-center items-center ">
              <div className="w-2 h-2 rounded-full bg-[#153151]"></div>
            </div>
            <p className="text-2xl">{formatDate(today)}</p>
          </div>
          <div className="flex items-center gap-2 bg-white pl-1 pr-3 py-1 rounded-3xl">
            <span className="bg-[#15315140] p-2 rounded-full">
              <BsFillLightningChargeFill color="#153151" />
            </span>
            <p className="text-[#153151] font-semibold">
              Welcome To{" "}
              <span className="font-bold tracking-wide">
                Ad-Dirasah Online Academy
              </span>
            </p>
          </div>
          <h1 className="leading-13 text-5xl font-bold tracking-wider">
            Start Learning From <br></br> The World's{" "}
            <span className="text-amber-300">Best Institutions</span>
          </h1>
          <div className="flex gap-10">
            <Link to="/courses">
              <button className="btn font-semibold text-[16px]">
                Let's Start Learning
              </button>
            </Link>
            <VideoShowingModal></VideoShowingModal>
          </div>
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/Mvv32v1/hero-author-4.png" alt="" />
            <p className="text-xl">
              <span className="text-amber-300 font-semibold">10k</span>{" "}
              Enrolment
            </p>
          </div>
          <p className="text-2xl font-semibold tracking-wide">
            Explore <span className="text-amber-300">1350+</span> Courses within
            Subject
          </p>
        </div>

        <div className="right">
          <img
            className="w-136"
            src="https://i.ibb.co/wNtcffbC/img-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
