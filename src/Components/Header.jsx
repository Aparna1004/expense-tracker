import Image from 'next/image'
import React from 'react';
import logo from "@/Images/logo.svg"

function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className='flex p-2 gap-2'>
      <Image src={logo}
        alt="Logo"
        width={30}
        height={50}
        />
        <label>Expenstivity</label>
      </div>
        
    </div>
  )
}

export default Header
