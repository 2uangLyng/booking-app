import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import { FaScreenpal, FaUpDown } from 'react-icons/fa6'
import {
  FaEnvelope,
  FaInbox,
  FaList,
  FaMap,
  FaMapMarkedAlt,
  FaUser,
} from 'react-icons/fa'

const About = () => {
  return (
    <section className="max-padd-container pb-16 xl:pb-28">
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* Image - LeftSide */}
        <div className="flex-1">
          <div className="relative">
            <img src={about1} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 left-8 bg-white px-2 rounded-full medium-14">
              San Francisco
            </span>
          </div>
        </div>
        {/* INFO - RightSide */}
        <div class="flex-1 ">
          <h2 class="h2">
            Empowering You to Find Your Dream Home, Effortlessly
          </h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            itaque similique reprehenderit harum, sunt enim cupiditate
            accusantium minima dolorum.
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaScreenpal className="text-[#65b800]" />
              <p className="text-gray-500">
                Virtual property tours and viewings
              </p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-[#65b800]" />
              <p className="text-gray-500">Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaMap className="text-[#65b800]" />
              <p className="text-gray-500">Interactive floor plans and maps</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-[#65b800]" />
              <p className="text-gray-500">Access to off-market properties</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="text-[#65b800]" />
              <p className="text-gray-500">
                Direct messaging with agents and owners
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row-reverse gap-12 mt-32">
        {/* Image - LeftSide - Second Container */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={about2} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 right-8 bg-white px-2 rounded-full medium-14">
              Golden Coast
            </span>
          </div>
        </div>
        {/* INFO - RightSide - Second Container */}
        <div class="flex-1 ">
          <h2 class="h2">
            Simplifying Your Real Estate Journey Every Step of the Way
          </h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            itaque similique reprehenderit harum, sunt enim cupiditate
            accusantium minima dolorum.
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaList className="text-[#65b800]" />
              <p className="text-gray-500">
                In-app scheduling for property viewings
              </p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-[#65b800]" />
              <p className="text-gray-500">Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaInbox className="text-[#65b800]" />
              <p className="text-gray-500">
                User-friendly interface for smooth navigation
              </p>
            </div>
            <div className="flex gap-3">
              <FaUser className="text-[#65b800]" />
              <p className="text-gray-500">
                Detailed agent and realtor profiles
              </p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-[#65b800]" />
              <p className="text-gray-500">Access to off-market properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
