import React from 'react';
import Image from 'next/image';
import logose from '../../../public/logo.png';

const Logo = () => {
  return (
    <div>
      <a href='/'>
        <Image
        src={logose}
        alt='logo'
        className='w-32 md:w-40'
        />
      </a>
    </div>
  )
}

export default Logo