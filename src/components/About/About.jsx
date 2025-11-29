import React from "react";
import profile_img from "../../assets/images/cam.jpg";

const About = () => {
  return (
    <div id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white inline-block relative z-10">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/50 -z-10 rounded-full blur-sm"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 -rotate-6"></div>
            <img
              src={profile_img}
              alt="Profile"
              className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10 transform transition duration-500 group-hover:rotate-0 rotate-3 object-cover h-[500px]"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-bold">Phương Nguyễn</span>, a Full Stack Developer based in Vietnam.
                I have a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and
                back-end technologies, I strive to deliver seamless user experiences and robust functionality.
              </p>
              <p>
                My journey in web development began with a curiosity for how things work behind the scenes. Over the years, I've honed my
                skills in various programming languages and frameworks, allowing me to tackle complex challenges and bring innovative ideas to life.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {[
                { name: "HTML & CSS", width: "90%" },
                { name: "Vue JS", width: "80%" },
                { name: "JavaScript", width: "85%" },
                { name: "React JS", width: "75%" }
              ].map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className="text-gray-400">{skill.width}</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-purple rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:scale-x-105"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "2+", label: "YEARS OF EXPERIENCE" },
            { number: "10+", label: "PROJECTS COMPLETED" },
            { number: "15+", label: "HAPPY CLIENTS" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {item.number}
              </h1>
              <p className="text-sm md:text-base text-gray-400 tracking-widest font-medium group-hover:text-white transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
