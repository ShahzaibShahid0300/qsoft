import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <section
      className="bg-cover bg-center py-10 px-4 text-white overflow-hidden"
      style={{ backgroundImage: "url('/image/4.jpg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Check out how <span className="font-bold">Control ERP</span><br />
            sets a new benchmark of<br />
            workflow automation in<br />
            multiple industry verticals
          </h2>
        </div>

        {/* Video + Mobile */}
        <div className="flex items-center gap-6 md:w-1/2 justify-center md:justify-end flex-wrap">
          
          {/* Video Thumbnail */}
          <div className="w-64 h-40 md:w-80 md:h-48 bg-black rounded-lg overflow-hidden relative">
            <img
              src="/image/a.jpg"
              alt="Video"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <FaPlay className="text-white text-3xl bg-red-600 p-2 rounded-full" />
            </button>
          </div>

          {/* Mobile Image - no overflow */}
          <img
            src="/image/mobile.jpg"
            alt="Mobile"
            className="w-32 md:w-40 lg:w-44 rounded-md shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
