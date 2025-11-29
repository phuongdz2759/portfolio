import React from 'react'
import mailIcon from '../../assets/mail_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import locationIcon from '../../assets/location_icon.svg'

const Footer = () => {
  return (
    <footer className="bg-dark-800 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-purple bg-clip-text text-transparent">Phương</span>
              <span className="text-sm text-gray-400 tracking-wider">FullStack Developer</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating digital experiences that inspire and engage. Building the future of web one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-primary after:rounded-full">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Docs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 h-0.5 bg-primary mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-primary after:rounded-full">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <img src={mailIcon} alt="Email" className="w-5 h-5" />
                <span>kuem271003@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <img src={callIcon} alt="Phone" className="w-5 h-5" />
                <span>+84 982 078 899</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>Da Nang City, Vietnam</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-primary after:rounded-full">Follow Me</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/ducati.phuong.3' },
                { name: 'GitHub', url: 'https://github.com/kuem271003' },
                { name: 'Twitter', url: 'https://x.com/kuem271003' },
                { name: 'Instagram', url: 'https://www.instagram.com/hphuong271003/' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/20 text-gray-400 hover:bg-white hover:text-dark-900 hover:border-white transition-all duration-300 text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
