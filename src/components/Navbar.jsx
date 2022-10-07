import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dphiLogo } from '../assets'

/**
 * @name Navbar
 * @description This is the Navbar component.
 * @returns {JSX.Element} Navbar component
 */
const Navbar = () => {

  const navigateTo = useNavigate()

  return (
    <div className='top-0 w-full py-[2vh] px-[6vw]'>
        <img onClick={() => navigateTo('/')} className='cursor-pointer' src={dphiLogo} alt="DPhi" />
    </div>
  )
}

export default Navbar