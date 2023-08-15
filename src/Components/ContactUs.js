import React from 'react';
import img from '../Logo/contact.jpg';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <a href="#" className="text-xl font-semibold">Foodie Delights</a>
        </div>
      </nav> */}

      <div className="container mx-auto flex justify-between my-8 p-8 bg-white shadow-md rounded-lg">
        <div className="w-2/3 pr-8">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">We would love to hear from you. Fill out the form below to get in touch.</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <img src={img} alt="" className="h-full object-cover rounded-lg" />
        </div>
      </div>

      <footer className="bg-gray-800 flex-grow text-white text-center py-4  fixed  inset-x-0
             bottom-0
             p-4">
        <p>&copy; 2023 Foodie Delights. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
