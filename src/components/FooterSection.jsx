import React from 'react'
import { Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            Welcome to My school, where we foster a nurturing and inclusive environment
             for all students. Our dedicated faculty is committed to providing a well-rounded 
             education that emphasizes academic excellence, personal growth, and character 
             development. We believe in empowering our students to become lifelong learners 
             and responsible global citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Email: awaisafzal540@gmail.com</p>
              
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors duration-300">
                   <Instagram/>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved. @Codewithawais-byte</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
