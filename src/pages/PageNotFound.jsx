import React from 'react'
import { Helmet } from 'react-helmet'
import { pageNotFound } from '../assets'
import { Navbar } from '../components'
import preventOnDragImg from '../utils/preventOnDragImg'

/**
 * @name PageNotFound
 * @description This component is used to display the 404 page
 * @returns {JSX.Element} PageNotFound component
 */
const PageNotFound = () => {
  return (
    <div>

      <Helmet>
        <title>Page Not Found | DPhi</title>
        <meta name="description" content="Page Not Found" />
        <meta name="keywords" content="Page Not Found" />
        <meta name="author" content="DPhi" />
      </Helmet>

      <Navbar />
      <div className='flex justify-center items-center bg-[#F0F0F0] h-screen'>
        <img onDrag={preventOnDragImg()} src={pageNotFound} alt="page not found" />
      </div>
    </div>
  )
}

export default PageNotFound