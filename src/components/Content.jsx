import React from 'react'
import imageMedia from '../images/background.png'
import { BookOpenText, Zap, Book, Brain, GraduationCap, School, ShoppingCart, Clock, Award, Users, Eye, Heart, ChevronRight, EyeClosed, Download } from 'lucide-react'
import cardimage from '../images/cardimage.png'
import cardimage2 from '../images/cardimag2.png'
import cardimage3 from '../images/cardimage3.png'
import cardimage4 from '../images/cardimage4.png'
import PopularCourses from './PopularCourses'
import Testimonials from './Testimonials'


const Content = () => {

  const handleClick = () => {
    console.log("clciked");

  }


  return (
    <>
      {/* video section */}
      <div className='container mx-auto p-10  w-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto max-w-5xl py-20">
          {/* Left Column */}
          <div className='text-white'>
            <div className='border-t-4 border-red-500 w-16 mb-8'></div>
            <h2 className='mb-4 text-2xl font-bold'>Video in live action</h2>
            <p>
              Problems trying to resolve the conflict between the two major realms of Classical physics:
              Newtonian mechanics
            </p>
          </div>

          {/* Right Column */}
          <div className='text-white'>
            <div className='relative w-full aspect-video rounded-xl bg-gray-800 flex items-center justify-center'>
              <div className="text-center p-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="container mx-auto p-10 ">
        <div className='mb-10 grid grid-cols-1 sm-grid-cols-1 lg:w-120'>
          <p className='text-purple-500 font-bold'>Practice advice</p>
          <h2 className='text-white font-bold text-[40px]'>Get Quality Education</h2>
          <p className='text-white'>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6   shadow-lg ">
            <School className='text-purple-700 h-20 w-20 mb-5' />
            <p className='text-dark font-bold'>Books library</p>

            <div className='border-b-3 border-red-500 mt-4 mb-4 w-13'>

            </div>
            <p>The gradual
              accumulation of
              information about
            </p>
          </div>
          <div className="bg-white p-6  shadow-lg ">
            <Brain className='text-green-700 h-20 w-20 mb-5' />
            <p className='text-dark font-bold'>Expert instruction</p>

            <div className='border-b-3 border-red-500 mt-4 mb-4 w-13'>

            </div>
            <p>The gradual
              accumulation of
              information about
            </p>
          </div>
          <div className="bg-purple-700 p-6  shadow-lg ">
            <GraduationCap className='text-white h-20 w-20 mb-5' />
            <p className='text-white font-bold'>Training cources</p>

            <div className='border-b-3 border- mt-4 mb-4 w-13'>

            </div>
            <p className='text-white'>The gradual
              accumulation of
              information about
            </p>
          </div>
          <div className="bg-white p-6  shadow-lg ">
            <BookOpenText className='text-orange-500 h-20 w-20 mb-5' />
            <p className='text-dark font-bold'>2000 online courses</p>

            <div className='border-b-3 border-orange-500 mt-4 mb-4 w-13'>

            </div>
            <p>The gradual
              accumulation of
              information about
            </p>
          </div>
        </div>
      </div>

      {/* courses section */}
      <div className='mt-20 container mx-auto p-10' id='courses'>
        <div className="container mx-auto p-4">
          {/* Image Section */}
          <div className='mb-10 grid grid-cols-1 sm-grid-cols-1 lg:w-120'>
            <p className='text-purple-500 font-bold'>Courses</p>
            <h2 className='text-white font-bold text-[40px]'>Every Client Matters</h2>
            <p className='text-white'>Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="max-w-sm overflow-hidden shadow-lg bg-white">
              {/* Image Section with Icons */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={cardimage} // Replace with your image URL
                  alt="Course Image"
                />
                {/* Heart Icon */}
                <div className="absolute bottom-2  left-28 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                {/* Cart Icon */}
                <div className="absolute bottom-2 left-38 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <ShoppingCart className="w-5 h-5 text-blue-500" />
                </div>
                <div className='absolute bottom-2 left-18 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100'>
                  <Eye className='w-5 h-5' />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">

                  <div>
                    <button onClick={handleClick}><span className="cursor-pointer  text-purple-700 font-bold">Join Us</span></button>
                  </div>
                  <div className='flex items-center bg-blue-950 rounded-2xl px-2'>
                    <svg className="w-5 h-5 px-1  rounded-lg text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class=" text-sm  text-white dark:text-white">4.9</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-gray-700">2,769 online courses</span>
                </div>
                <p className="text-gray-600 mb-3">We focus on ergonomics and meeting you....</p>
                <div className='flex gap-3 text-sm items-center text-gray-600 font-bold mb-3'>
                  <Download className='text-gray-400' />
                  <p>15 Sales</p>
                </div>
                <div className='flex gap-3 mb-4'>
                  <p className='font-bold text-gray-400'>$12</p>
                  <p className='font-bold text-orange-600'>$10</p>
                </div>
                <div className='flex mb-4 gap-2 items-center border-2 border-purple-500 rounded-3xl p-2 text-purple-700 hover:bg-slate-300 cursor-pointer font-bold w-35'>
                  <button>Learn More  </button>
                  <div> <ChevronRight /></div>
                </div>
              </div>
            </div>


            {/* Card 1 */}
            {/* <div className="">
              <div className='relative'>
              <img  src={cardimage} alt="" className='w-full ' />
              <Heart size={40} className='bottom-6 cursor-pointer left-15 p-2 rounded-full absolute bg-white  ' />
              <ShoppingCart size={40} className='cursor-pointer absolute bottom-6 p-2 rounded-full left-29 bg-white' />
              <Eye size={40} strokeWidth={3} className='cursor-pointer absolute bottom-6 p-2 rounded-full left-43 bg-white' />
             
              </div>
              <div className='bg-white p-6 shadow-md'>
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-lg font-bold">Sale</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Every Client Matters</h2>
                <p className="text-gray-600 mb-4">
                  We focus on ergonomics and meeting you....
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">2,769 online courses</span>
                  <span className="text-sm text-gray-500">15 Sales</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">$16.48</span>
                  <span className="text-lg font-bold text-blue-500">$6.48</span>
                </div>
                <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                  Learn More
                </button>
              </div>
            </div> */}

            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300">

              <div class="bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 absolute top-0 right-0 m-2 rounded">
                Sale
              </div>

              <img class="w-full h-48 object-cover" src={cardimage} alt="Pencils" />


              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <h2 class="text-lg font-bold">Join Us</h2>
                  <div class="text-yellow-500">
                    ⭐ 4.9
                  </div>
                </div>

                <p class="text-gray-700 text-base mb-2">
                  2,769 online courses
                </p>

                <p class="text-gray-600 text-sm mb-2">
                  We focus on ergonomics and meeting you....
                </p>

                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-500">
                    15 Sales
                  </span>
                  <span class="text-lg font-bold text-purple-600">
                    $16.48 <span class="text-red-600 line-through">$6.48</span>
                  </span>
                </div>

                <a href="#" class="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 text-center block">
                  Learn More
                </a>
              </div>
            </div> */}

            {/* Card 2 */}
            <div className="max-w-sm  overflow-hidden shadow-lg bg-white ">
              {/* Image Section with Icons */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={cardimage2} // Replace with your image URL
                  alt="Course Image"
                />
                {/* Heart Icon */}
                <div className="absolute bottom-2  left-28 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                {/* Cart Icon */}
                <div className="absolute bottom-2 left-38 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <ShoppingCart className="w-5 h-5 text-blue-500" />
                </div>
                <div className='absolute bottom-2 left-18 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100'>
                  <Eye className='w-5 h-5' />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">

                  <div>
                    <button onClick={handleClick}><span className="cursor-pointer text-purple-700 font-bold">Join Us</span></button>
                  </div>
                  <div className='flex items-center bg-blue-950 rounded-2xl px-2'>
                    <svg className="w-5 h-5  px-1 rounded-lg text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class=" text-sm  text-white dark:text-white">4.7</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-gray-700">2,769 online courses</span>
                </div>
                <p className="text-gray-600 mb-3">We focus on ergonomics and meeting you....</p>
                <div className='flex gap-3 text-sm items-center text-gray-600 font-bold mb-3'>
                  <Download className='text-gray-400' />
                  <p>15 Sales</p>
                </div>
                <div className='flex gap-3 mb-4'>
                  <p className='font-bold text-gray-400'>$17</p>
                  <p className='font-bold text-orange-600'>$14</p>
                </div>
                <div className='flex mb-4 gap-2 items-center border-2 border-purple-500 rounded-3xl p-2 text-purple-700 hover:bg-slate-300 cursor-pointer font-bold w-35'>
                  <button>Learn More  </button>
                  <div> <ChevronRight /></div>
                </div>
              </div>

            </div>

            {/* <div className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-lg font-bold">Sale</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Lifetime access</h2>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you....
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">15 Sales</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">$16.48</span>
                <span className="text-lg font-bold text-green-500">$6.48</span>
              </div>
              <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                Learn More
              </button>
            </div> */}
            {/* <div className="">
              <img src={cardimage2} alt="" className='w-screen' />
              <div className='bg-white p-6 shadow-md'>
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-lg font-bold">Sale</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Every Client Matters</h2>
                <p className="text-gray-600 mb-4">
                  We focus on ergonomics and meeting you....
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">2,769 online courses</span>
                  <span className="text-sm text-gray-500">15 Sales</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">$16.48</span>
                  <span className="text-lg font-bold text-blue-500">$6.48</span>
                </div>
                <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                  Learn More
                </button>
              </div>
            </div> */}

            {/* Card 3 */}
            <div className="max-w-sm overflow-hidden shadow-lg bg-white">
              {/* Image Section with Icons */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={cardimage3} // Replace with your image URL
                  alt="Course Image"
                />
                {/* Heart Icon */}
                <div className="absolute bottom-2  left-28 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                {/* Cart Icon */}
                <div className="absolute bottom-2 left-38 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <ShoppingCart className="w-5 h-5 text-blue-500" />
                </div>
                <div className='absolute bottom-2 left-18 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100'>
                  <Eye className='w-5 h-5' />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">

                  <div>
                    <button onClick={handleClick}><span className="cursor-pointer text-purple-700 font-bold">Join Us</span></button>
                  </div>
                  <div className='flex items-center bg-blue-950 rounded-2xl px-2'>
                    <svg className="w-5 h-5  px-1 rounded-lg text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class=" text-sm  text-white dark:text-white">4.4</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-gray-700">2,769 online courses</span>
                </div>
                <p className="text-gray-600 mb-3">We focus on ergonomics and meeting you....</p>
                <div className='flex gap-3 text-sm items-center text-gray-600 font-bold mb-3'>
                  <Download className='text-gray-400' />
                  <p>15 Sales</p>
                </div>
                <div className='flex gap-3 mb-4'>
                  <p className='font-bold text-gray-400'>$16</p>
                  <p className='font-bold text-orange-600'>$10</p>
                </div>
                <div className='flex mb-4 gap-2 items-center border-2 border-purple-500 rounded-3xl p-2 text-purple-700 hover:bg-slate-300 cursor-pointer font-bold w-35'>
                  <button>Learn More  </button>
                  <div> <ChevronRight /></div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-500 mr-2" />
                <span className="text-lg font-bold">Sale</span>
              </div>
              <h2 className="text-xl font-bold mb-2">For Better Future</h2>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you....
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">15 Sales</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">$16.48</span>
                <span className="text-lg font-bold text-purple-500">$6.48</span>
              </div>
              <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                Learn More
              </button>
            </div> */}
            {/* <div className="">
              <img src={cardimage3} alt="" className='w-full' />
              <div className='bg-white p-6 shadow-md'>
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-lg font-bold">Sale</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Every Client Matters</h2>
                <p className="text-gray-600 mb-4">
                  We focus on ergonomics and meeting you....
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">2,769 online courses</span>
                  <span className="text-sm text-gray-500">15 Sales</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">$16.48</span>
                  <span className="text-lg font-bold text-blue-500">$6.48</span>
                </div>
                <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                  Learn More
                </button>
              </div>
            </div> */}

            {/* Card 4 */}

            <div className="max-w-sm overflow-hidden shadow-lg bg-white">
              {/* Image Section with Icons */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={cardimage4} // Replace with your image URL
                  alt="Course Image"
                />
                {/* Heart Icon */}
                <div className="absolute bottom-2  left-28 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                {/* Cart Icon */}
                <div className="absolute bottom-2 left-38 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <ShoppingCart className="w-5 h-5 text-blue-500" />
                </div>
                <div className='absolute bottom-2 left-18 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100'>
                  <Eye className='w-5 h-5' />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">

                  <div>
                    <button onClick={handleClick}><span className="cursor-pointer  text-purple-700 font-bold">Join Us</span></button>
                  </div>
                  <div className='flex items-center bg-blue-950 rounded-2xl px-2'>
                    <svg className="w-5 h-5  px-1 rounded-lg text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class=" text-sm  text-white dark:text-white">4.5</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-gray-900 font-bold">2,769 online courses</span>
                </div>
                <p className="text-gray-600 mb-3">We focus on ergonomics and meeting you....</p>
                <div className='flex gap-3 text-sm items-center text-gray-600 font-bold mb-3'>
                  <Download className='text-gray-400' />
                  <p>15 Sales</p>
                </div>
                <div className='flex gap-3 mb-4'>
                  <p className='font-bold text-gray-400'>$20</p>
                  <p className='font-bold text-orange-600'>$14.99</p>
                </div>
                <div className='flex mb-4 gap-2 items-center border-2 border-purple-500 rounded-3xl p-2 text-purple-700 hover:bg-slate-300 cursor-pointer font-bold w-35'>
                  <button>Learn More  </button>
                  <div> <ChevronRight /></div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-red-500 mr-2" />
                <span className="text-lg font-bold">Sale</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Join Us</h2>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you....
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">2,769 online courses</span>
                <span className="text-sm text-gray-500">15 Sales</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">$16.48</span>
                <span className="text-lg font-bold text-red-500">$6.48</span>
              </div>
              <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                Learn More <ChevronRight />
              </button>
            </div> */}
            {/* <div className="">
              <img src={cardimage4} alt="" className='w-full' />
              <div className='bg-white p-6 shadow-md'>
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-lg font-bold">Sale</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Every Client Matters</h2>
                <p className="text-gray-600 mb-4">
                  We focus on ergonomics and meeting you....
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">2,769 online courses</span>
                  <span className="text-sm text-gray-500">15 Sales</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">$16.48</span>
                  <span className="text-lg font-bold text-blue-500">$6.48</span>
                </div>
                <button className="w-full flex justify-center bg-transparent text-purple-600 border-2 font-bold py-2 rounded-3xl cursor-pointer hover:bg-purple-400 transition duration-300">
                  Learn More
                </button>
              </div>
            </div> */}

          </div>
        </div>
      </div>

      {/* popular courses section */}
      <PopularCourses/>

      <Testimonials/>

    </>
  )
}

export default Content
