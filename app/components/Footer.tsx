import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-black">
              <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
            </h1>
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              temporibus eveniet eaque autem optio maiores laborum ut adipisci
              ea vitae soluta modi exercitationem accusantium quod cupiditate
              expedita, saepe dolorum vel!
            </p>
          </div>
          {/** About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular & compaign</li>
            </ul>
          </div>
          {/** Our infos Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>
          {/** Our contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2" /> Amsterdam,Netherlands
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> +31 20 123 4567
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" /> 7 days a week, 9:00 AM - 5:00 PM
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> support@appify.com
              </li>
            </ul>
          </div>
        </div>
        {/** Bottom Section */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            © 2025 Appify - Productivity & Workspace Management App. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-6">
            <span>Social :</span>
            <Link href="#" className=" text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className=" text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className=" text-gray-500 hover:text-gray-800">
              <FaInstagram />
            </Link>
            <Link href="#" className=" text-gray-500 hover:text-gray-800">
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
