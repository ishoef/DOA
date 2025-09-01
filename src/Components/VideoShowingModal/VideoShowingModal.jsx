import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoShowingModal = () => {
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
    <>
      {/* Trigger Button */}
      <div
        onClick={() => setShowVideo(true)}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* 🔹 Added shadow-md for better button look */}
        <button className="cursor-pointer p-3 rounded-full bg-white shadow-md">
          <FaPlay color="#153151" />
        </button>
        <p className="text-xl hidden md:block lg:block">Watch The Video</p>
      </div>

      {/* Video Modal */}
      {showVideo && (
        // 🔹 Added px-4 for mobile padding
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#15315199] px-4">
          <div
            ref={modalRef}
            // 🔹 Changed size classes → w-full max-w-4xl for responsive modal width
            className="bg-white p-2 md:p-5 rounded-xl shadow-lg w-full max-w-4xl relative"
          >
            {/* Close button */}
            <button
              className="cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowVideo(false)}
            >
              ✖
            </button>

            {/* 🔹 NEW: Responsive video wrapper using aspect ratio */}
            <div className="relative w-full pt-[56.25%]">
              {/* 16:9 aspect ratio trick */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/1A1jPupL5Co?si=bhh5egMl_PblS8Eg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoShowingModal;
