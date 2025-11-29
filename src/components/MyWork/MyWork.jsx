import React from 'react'
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white inline-block relative z-10">
            My Latest Work
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/50 -z-10 rounded-full blur-sm"></span>
          </h1>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mywork_data.map((work, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src={work.w_img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project Name</h3>
                <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Web Development</p>
                <div className="mt-4 inline-flex items-center text-primary font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  View Project <img src={arrow_icon} alt="" className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-dark-900 transition-all duration-300">
            <span className="font-medium">Show More</span>
            <img
              src={arrow_icon}
              alt=""
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 filter group-hover:brightness-0"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyWork
