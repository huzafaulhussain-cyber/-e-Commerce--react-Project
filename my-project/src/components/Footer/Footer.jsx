import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className="bg-zinc-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Company</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Brand Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Blog</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Help Center</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Discord Server</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Twitter / X</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Support</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Legal</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Licensing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Download App</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">iOS</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Android</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">Windows</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-150">MacOS</a></li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between px-2">
          <span className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 <a href="#" className="hover:text-indigo-400 font-semibold">Company Name™</a>. All Rights Reserved.
          </span>

          <div className="flex space-x-5">
            <a href="#" className="text-gray-400  hover:text-yellow-400  transition duration-200"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400  transition duration-200"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200"><FaTiktok size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400  transition duration-200"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
