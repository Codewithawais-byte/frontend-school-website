//create a navbar component
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo/Brand */}
            <div className='flex-shrink-0'>
              <h1 className='text-white font-bold text-xl'>Our School</h1>
            </div>
            
            {/* Navigation Links */}
            <div className='flex space-x-4'>
              <Link to='/' className=' text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium'>
                Home
              </Link>
              <Link to='/about' className='text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium'>
                About
              </Link>
              
              <Link to='/contact' className='text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar

