import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import backgroundImage from '../images/background.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '#' },
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

 

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
          
            ))}
            <Link 
            to={isLoggedIn? '/admission' : '/login'} 
            onClick={(e)=>{
              if (!isLoggedIn){
                e.preventDefault();
                navigate('/login')
              }
            }} className='text-sm/6 font-semibold text-white'>
              Admission
            </Link>
          </div>
          <div className="lg:hidden">
            {mobileMenuOpen && (
              <div className="absolute top-0 left-0 right-0 bg-white shadow-lg">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="block text-sm/6 font-semibold text-black p-4">
                    {item.name}
                  </a>
                ))}
                <Link 
                  to={isLoggedIn ? '/admission' : '/login'} 
                  onClick={(e) => {
                    if (!isLoggedIn) {
                      e.preventDefault();
                      navigate('/login');
                    }
                  }} 
                  className='block text-sm/6 font-semibold text-black p-4'>
                  Admission
                </Link>
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="block text-sm/6 font-semibold text-black p-4">
                    Log out
                  </button>
                ) : (
                  <Link to="/login" className="block text-sm/6 font-semibold text-black p-4">
                    Log in
                  </Link>
                )}
                <button onClick={() => setMobileMenuOpen(false)} className="block text-sm/6 font-semibold text-black p-4">
                  Close Menu
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-sm/6 font-semibold hover:bg-red-800 text-white bg-red-600 px-4 cursor-pointer py-2 rounded-md"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <Link to="/login" className="text-sm/6 font-semibold text-white bg-purple-600 px-4 py-2 rounded-md">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <img src={backgroundImage} alt="Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="max-w-2xl py-32 sm:py-2 lg:py-22">
          <div className="hidden lg:justify-start sm:mb-8 sm:flex sm:justify-center">
            <div className="px-3 py-1 text-2xl/6 text-bold text-white hover:ring-gray-900/20">
              <h1 className='text-2xl font-bold text-purple-600'>Welcome</h1>
            </div>
          </div>
          <div className="lg:justify-start">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              20K+ STUDENTS TRUST US
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Find the right instructor for you from over 100+ teachers
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-4">
              {isLoggedIn ? (
                <Link to="#"  className="rounded-md bg-purple-600 px-4.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-800">
                  Join Us
                </Link>
              ) : (<></>)}
              <Link to="/" className="text-sm/6 font-semibold text-white border-1 border-white rounded-md px-3 py-2 hover:bg-neutral-600">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
