import React from 'react';

const ScrollToTop = () => {
    return (
      <div
        onClick={() => {
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }}
        className="w-fit h-fit fixed z-50 bottom-3 lg:bottom-12 right-3 lg:right-12 cursor-pointer bg-[#153151] py-1 text-white px-4"
      >
        <div className="text-4xl">↑</div>
      </div>
    );
};

export default ScrollToTop;