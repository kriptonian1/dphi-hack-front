import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'
import hackData from '../../../data/data'
import { img1, img2, img3, img4, img5, img6 } from '../../assets/cardimage'
import { cross } from '../../assets/icons'
import { Filter, HackCard } from './common'

const ExploreChallenge = () => {

    const current = new Date()

    const [data, setData] = useState([])

    const setSelect = (e) => {
        setData(state => [...state, e])
    }

    const removeSelect = (e) => {
        setData(state => state.filter(item => item !== e))

    }

    /**
     * @name filterData
     * @description filter the data based on the selected filter
     * @returns {array} filtered data
     */
    const renderFilteredData = () => {
        if (data.length === 0) {
            return hackData
        }
        else {
            const filterData = hackData.filter(item => data.includes(item.status) || data.includes(item.level))
            return filterData;
        }
    }

    //     {
    //         id: 1,
    //         image: img1,
    //         status: "Upcoming",
    //         level: "Easy",
    //         title: "Data Science Bootcamp - Graded Datathon",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: "2022-10-16",
    //         endTime: "2026-11-07",
    //     },
    //     {
    //         id: 2,
    //         image: img2,
    //         status: "Upcoming",
    //         level: "Easy",
    //         title: "Data Sprint 72 - Butterfly Identification",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: "2022-10-07",
    //         endTime: "2026-11-07",
    //     },
    //     {
    //         id: 3,
    //         image: img3,
    //         status: "Active",
    //         level: "Medium",
    //         title: "Data Sprint 71 - Weather Recognition",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: current,
    //         endTime: "2026-11-07",
    //     },
    //     {
    //         id: 4,
    //         image: img4,
    //         status: "Active",
    //         level: "Medium",
    //         title: "Data Sprint 70-Airline Passenger Satisfaction",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: current,
    //         endTime: "2026-11-07",
    //     },
    //     {
    //         id: 5,
    //         image: img5,
    //         status: "Past",
    //         level: "Hard",
    //         title: "Engineering Graduates Employment Outcomes",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: `2022-02-05`,
    //         endTime: `2022-02-07`,
    //     },
    //     {
    //         id: 6,
    //         image: img6,
    //         status: "Past",
    //         level: "Hard",
    //         title: "Travel Insurance Claim Prediction",
    //         description: "This is a 3 day long datathon where you will be given a dataset and you have to perform data analysis and build a model to predict the target variable. The top 3 participants will be awarded with cash prizes.",
    //         startTime: `2022-02-05`,
    //         endTime: `2022-02-07`,
    //     },
    // ];

    return (
        <div className='font-Poppins'>
            <div className='flex flex-col items-center space-y-[5vh] justify-center py-[10vh] px-[6vw] bg-[#002A3B] text-white '>
                <div className=" text-3xl font-semibold ">
                    Explore Challenges
                </div>

                {/* Search */}
                <div className='flex flex-col space-x-4'>
                    <div className='flex space-x-4'>
                        <form method="GET">
                            <div className="relative text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <input type="search" name="q" className="py-2 w-[50vw] text-sm text-white bg-[#dbdbdb] placeholder:text-[#858585] focus:placeholder:text-[#dbdbdb] rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search" autoComplete="off" />
                            </div>
                        </form>

                        <div>
                            <Filter removeData={removeSelect} addData={setSelect} arrVal={data} />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className='flex m-5'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='flex m-2'>

                                        {item != undefined ?
                                            <div className='flex items-center text-lg bg-[#F8F9FD7D] px-4 py-2 rounded-full' key={index}>
                                                {item}
                                                <button onClick={() => removeSelect(item)} className='m-1'> <img src={cross} alt="cross" /> </button>
                                            </div>
                                            : null}

                                    </div>

                                )
                            })
                        }
                    </div>


                </div>

            </div>

            {/* Hack Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-[10vh] px-[6vw] bg-[#003145] text-white'>

                {/* {hackData.map((item, index) => (
                    <div className='my-9 md:mx-9'>
                        <HackCard id={item.id} key={index} img={item.image} status={item.status} title={item.title} startTime={item.startTime} endTime={item.endTime} />
                    </div>

                ))} */}
                {renderFilteredData().map((item, index) => (
                    <div className='my-9 md:mx-9'>
                        <HackCard id={item.id} key={index} img={item.image} status={item.status} title={item.title} startTime={item.startTime} endTime={item.endTime} />
                    </div>

                ))}


            </div>

        </div>
    )
}

export default ExploreChallenge