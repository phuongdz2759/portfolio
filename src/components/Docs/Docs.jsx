import React from 'react'
import docs_data from '../../assets/docs_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Docs = () => {
    return (
        <div id="docs" className="py-20 relative bg-dark-800/30">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-white inline-block relative z-10">
                        Documentation
                        <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/50 -z-10 rounded-full blur-sm"></span>
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Explore detailed documentation, guides, and references for my projects.
                    </p>
                </div>

                {/* Docs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {docs_data.map((doc, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
                                <img
                                    src={doc.image}
                                    alt={doc.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow relative z-20">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {doc.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {doc.desc}
                                </p>

                                <a
                                    href={doc.link}
                                    className="inline-flex items-center text-primary font-medium group/link"
                                >
                                    Read Docs
                                    <img
                                        src={arrow_icon}
                                        alt="Arrow"
                                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-2"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Docs
