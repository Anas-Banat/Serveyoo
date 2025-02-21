import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

const Header = () => {
  return (
    <header className='bg-header-image bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden md:px-28'>
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header