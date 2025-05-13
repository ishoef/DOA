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
      <div
        onClick={() => setShowVideo(true)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <button className="cursor-pointer p-3 rounded-full bg-white">
          <FaPlay color="#153151" />
        </button>

        <p className="text-xl">Watch The Video</p>
      </div>

      {/* VideoShowing Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#15315199] transition-opacity  ">
          <div
            ref={modalRef}
            className="bg-white p-5 rounded shadow-lg w-[70%] max-w-fit relative"
          >
            {/* Close button */}
            <button
              className="cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowVideo(false)}
            >
              ✖
            </button>
            <div className="w-265 h-149">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1A1jPupL5Co?si=bhh5egMl_PblS8Eg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1083729082?h=a8dabf0749&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="YouTube Short Video from Orientation"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
    </>
  );
};

export default VideoShowingModal;
