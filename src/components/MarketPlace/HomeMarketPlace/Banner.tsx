import React from 'react';
import book from '../../../assets/MarketHome/book-stack.png';
import bannerlg from '../../../assets/MarketHome/prototype.jpg';
import bannermd from '../../../assets/MarketHome/bannermd.jpg';

type Props = {};

function Banner({}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div>
        <p className='lg:text-6xl md:text-4xl text-3xl p-4 text-center font-semibold tracking-wide lg:tracking-normal lg:py-16 font-mono'>
            The Market for your new journey.
        </p>
    </div>
      <div >
        <img className='border hidden lg:block border-solid border-transparent rounded-xl' src={bannerlg} alt="" />

        <img className='border hidden md:block lg:hidden border-solid border-transparent rounded-xl' src={bannermd} alt="" />
      </div>
      {/* <div className="flex bg-red-500 ">
        <div className="LEFT text-4xl font-bold flex bg-green-600 flex-col justify-center px-12">
          <div>
            Buy and sell your daily needs for best <span className="text-purple-700"> price</span>.
          </div>
        </div>
        <div>
          <img src={book} width="auto" height="auto" />
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
