import React from 'react'
import service_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    return (
        <div id="services" className="py-20 relative bg-dark-800/50">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-white inline-block relative z-10">
                        My Services
                        <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/50 -z-10 rounded-full blur-sm"></span>
                    </h1>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service_data.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-dark-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(218,124,37,0.1)] flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">{service.s_no}</h3>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 group-hover:text-white transition-colors">
                                {service.s_name}
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                {service.s_desc}
                            </p>

                            <div className="flex items-center gap-4 cursor-pointer group/link">
                                <p className="text-white font-medium group-hover/link:text-primary transition-colors">Xem thêm</p>
                                <img
                                    src={arrow_icon}
                                    alt="Arrow"
                                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
