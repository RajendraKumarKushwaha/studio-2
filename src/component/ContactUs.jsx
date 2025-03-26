"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-500 mt-2">We are here to help you. Reach out to us anytime!</p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 shadow rounded-lg">
            <Phone className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-500 mt-2">+91 98765 43210</p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <Mail className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-500 mt-2">contact@example.com</p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <MapPin className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-500 mt-2">123 Street, City, Country</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096165!2d144.95373511531895!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c84fd7%3A0xa0c6c7b334a46934!2sFederation%20Square!5e0!3m2!1sen!2s!4v1642763985143!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
