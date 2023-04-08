import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false) ;

  return (
    <div className='h-[8vh]'>
        <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link to={`/`} className="-m-1.5 p-1.5">
            <span>LOGO</span>
          </Link>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-center space-x-10'>
        <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
            Features
          </a>
          <Link to={`/market`} className="text-xl font-semibold leading-6 text-gray-900">
            Marketplace
          </Link>
          <Link to={`/more`} className="text-xl font-semibold leading-6 text-gray-900">
            More
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <p>
                MenuX
            </p>
          </button>
        </div>

        
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='/user' className="text-xl font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>


        {/* Mobile wala */}
      {mobileMenuOpen==true ?(
        <div className="lg:hidden" >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link to={`/`} className="-m-1.5 p-1.5">
              <p>Logo</p>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p>X</p>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <Link to={`/market`}
                  className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link to={`/more`}
                  className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  More
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):("")}





      </nav>

      
      
    </header>
    </div>
  )
}

export default Header







