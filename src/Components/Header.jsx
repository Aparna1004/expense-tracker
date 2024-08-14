import React from 'react';

function Header() {
  return (
    <div className='p-4 sm:p-5 flex justify-between items-center border shadow-sm'>
      <div className='flex items-center gap-2'>
        <svg
          id="logo-35"
          width="40"
          height="31"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
        >
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" fill="#007AFF"></path>
          <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" fill="#312ECB"></path>
        </svg>
        <label className='font-extrabold text-lg sm:text-2xl'>TrackIt</label>
      </div>
    </div>
  );
}

export default Header;
