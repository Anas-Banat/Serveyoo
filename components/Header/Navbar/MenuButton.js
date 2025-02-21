import React from 'react'
import {FiMenu, FiX} from 'react-icons/fi'

const MenuButton = ({menuOpen, toogleMenu}) => {
  return (
    <>
    <button className='text-primary md:hidden z-100 text-3xl absolute top-16 right-0 px-4'
    style={{zIndex: "101"}}
    onClick={toogleMenu}>
    {menuOpen ? <FiX /> : <FiMenu />}
    </button>
    </>
  )
}

export default MenuButton