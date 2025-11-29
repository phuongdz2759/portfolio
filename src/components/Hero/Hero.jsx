import React from "react";
import heroImage from "../../assets/images/kinh.jpg";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      {/* Profile Image */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <img
          src={heroImage}
          alt="Phương Nguyễn"
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-dark-900 shadow-2xl transform transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-up">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-purple">My Portfolio</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-medium text-gray-300 animate-fade-in-up delay-100">
          I'm <span className="font-bold text-white">Phương Nguyễn</span>, a Full Stack Developer in Vietnam
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          I'm a passionate developer with a knack for creating stunning web applications.
          Turning ideas into interactive reality with clean code and modern design.
        </p>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-10 animate-fade-in-up delay-300">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-purple text-white text-lg font-bold shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
            Connect with me!
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-white text-white text-lg font-bold hover:bg-white hover:text-dark-900 hover:-translate-y-1 transition-all duration-300">
            View My Resume!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
