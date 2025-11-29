import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [showMailView, setShowMailView] = useState(false);
    const [mailData, setMailData] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "08ab66ab-1c2b-47b2-8f66-bdcfcde54d28");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setMailData({
                    name: object.name,
                    email: object.email,
                    message: object.message,
                    timestamp: new Date().toLocaleString()
                });
                setShowMailView(true);

                toast.success("Message sent successfully! I'll get back to you soon.");
                event.target.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    const closeMailView = () => {
        setShowMailView(false);
        setMailData(null);
    };

    return (
        <div id="contact" className="py-20 relative bg-dark-800/30">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-white inline-block relative z-10">
                        Get in touch
                        <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/50 -z-10 rounded-full blur-sm"></span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Info */}
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-purple bg-clip-text text-transparent">Let's talk</h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            Feel free to reach out to me through any of the platforms below.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <i className="fa-solid fa-envelope text-xl"></i>
                                </div>
                                <span className="text-lg">kuem271003@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <i className="fa-solid fa-phone text-xl"></i>
                                </div>
                                <span className="text-lg">+84 982 078 899</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <i className="fa-solid fa-location-dot text-xl"></i>
                                </div>
                                <span className="text-lg">Da Nang City, Vietnam</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-gray-300 font-medium ml-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                                className="w-full px-6 py-4 rounded-xl bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-gray-300 font-medium ml-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                className="w-full px-6 py-4 rounded-xl bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-gray-300 font-medium ml-1">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                placeholder="Enter your message"
                                required
                                className="w-full px-6 py-4 rounded-xl bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder-gray-600 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-purple text-white font-bold text-lg shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Mail View Modal */}
            {showMailView && mailData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeMailView}>
                    <div className="bg-dark-800 rounded-2xl border border-white/10 w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-gradient-to-r from-primary to-primary-purple p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span>📧</span> Email Sent Successfully!
                            </h2>
                            <button className="text-white/80 hover:text-white text-2xl leading-none" onClick={closeMailView}>×</button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                                <div>
                                    <strong className="text-white block mb-1">From:</strong>
                                    {mailData.name} <span className="text-sm text-gray-500">({mailData.email})</span>
                                </div>
                                <div>
                                    <strong className="text-white block mb-1">Date:</strong>
                                    {mailData.timestamp}
                                </div>
                            </div>

                            <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                                <strong className="text-white block mb-3">Message:</strong>
                                <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{mailData.message}</p>
                            </div>

                            <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-lg">
                                <span className="text-xl">✅</span>
                                <p>Message delivered successfully. I'll get back to you as soon as possible!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact
