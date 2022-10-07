import React, { Fragment, useState } from 'react'
import { clock, easyLevelIcon, hardLevelIcon, mediumLevelIcon } from '../assets/icons'
import { Navbar } from '../components'
import preventOnDragImg from '../utils/preventOnDragImg'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import hackData from '../../data/data'
import { Dialog, Transition } from '@headlessui/react'

const Details = (props) => {

    let params = useParams()
    const navigate = useNavigate();

    const data = hackData.find((hack) => hack.id == params.id)

    /**
     * @name levelIcon
     * @description returns the level icon based on the difficulty level
     * @returns {image} image of the hackathon based on the level
     */
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

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }


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
                    <button onClick={() => navigate(`/edit/${params.id}`)} className='bg-[#44924C] border-[#44924C] border-2 px-7 py-2 rounded-xl text-white font-semibold'>
                        Edit
                    </button>
                    <button onClick={() => openModal()} className='border-[#DC1414] hover:bg-[#dc1414c0] hover:text-white border-2 px-7 py-2 rounded-xl text-[#DC1414] font-semibold'>
                        Delete
                    </button>
                </div>

            </div>

            <div className='flex flex-col px-[10vw] py-10 space-y-5'>
                {data.description}
            </div>


            {/* Dialog for confirm delete */}
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" open={isOpen} onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Are you sure you want to delete this hackathon?
                                    </Dialog.Title>

                                    <div className='flex justify-evenly'>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-white hover:bg-[#dc1414da] bg-[#dc1414c0] hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Yes Delete it
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Nope, I changed my mind
                                            </button>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}

export default Details