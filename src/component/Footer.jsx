import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Studio name</h2>
            <p className="text-gray-400">We craft stunning websites that drive results. Let’s build something amazing together.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: info@techyardweb.com</p>
            <p className="text-gray-400">Phone: +91 98765 43210</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><FaTwitter /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><FaInstagram /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} TechYard Web Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
