import React, { useState } from 'react'
import { clock, easyLevelIcon, hardLevelIcon, mediumLevelIcon } from '../assets/icons'
import { Navbar } from '../components'
import preventOnDragImg from '../utils/preventOnDragImg'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import hackData from '../../data/data'

const Details = (props) => {

    let params = useParams()

    const data = hackData.find((hack) => hack.id == params.id)

    const levelIcon = () => {
        if (data.level === 'Easy') {
            return easyLevelIcon
        }
        else if (data.level === 'Medium') {
            return mediumLevelIcon
        }
        else {
            return hardLevelIcon
        }
    };
    

    return (
        <div className='font-Poppins'>

            <Helmet>
                <title>{data.title} | DPhi</title>
            </Helmet>

            <Navbar />
            <div className='flex flex-col bg-[#003145] py-[10vh] px-[6vw]'>

                <div className='space-y-6'>
                    <div className='flex'>
                        <div className=' flex bg-[#FFCE5C] px-8 py-2 text-sm font-Poppins font-semibold rounded'>
                            <img className='pr-3' src={clock} alt="clock" />
                            Starts on 17th Jun'22 09:00 PM (India Standard Time)
                        </div>
                    </div>


                    <h1 className='text-white text-4xl flex font-semibold'>
                        {data.title}
                    </h1>
                    <p className='text-white font-medium'>
                        Identify the class to which each butterfly belongs to
                    </p>

                    <div className='flex'>
                        <div className='bg-[#F8F9FD] rounded text-[#003145] py-1 px-4 flex '>
                            <img onDrag={preventOnDragImg()} className='pr-2' src={levelIcon()} alt="easyLevelIcon" />
                            {data.level}
                        </div>
                    </div>


                </div>



            </div>

            <div className='flex py-3 px-[10vw] shadow-lg justify-between'>
                <div className='flex font-bold border-b-4 border-[#44924C]'>
                    Overview
                </div>

                <div className='space-x-4'>
                    <button className='bg-[#44924C] border-[#44924C] border-2 px-7 py-2 rounded-xl text-white font-semibold'>
                        Edit
                    </button>
                    <button className='border-[#DC1414] hover:bg-[#dc1414c0] hover:text-white border-2 px-7 py-2 rounded-xl text-[#DC1414] font-semibold'>
                        Delete
                    </button>
                </div>

            </div>

            <div className='flex flex-col px-[10vw] py-10 space-y-5'>
                {data.description}
            </div>

        </div>
    )
}

export default Details