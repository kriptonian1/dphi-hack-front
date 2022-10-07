import React from 'react'
import { useNavigate } from 'react-router-dom'
import { img1 } from '../../../assets/cardimage'
import { tick } from '../../../assets/icons'

/**
 * @name HackCard
 * @description renders the hack card
 * @param {*} id id of the hack
 * @param {*} img  thumbnail image
 * @param {*} status  status of the hackathon
 * @param {*} title  title of the hackathon
 * @param {*} startTime  start time of the hackathon
 * @param {*} endTime  end time of the hackathon
 * @returns {JSX.Element} HackCard
 */
const HackCard = ({ id,img, status, title, startTime, endTime }) => {
    /**
     * @name statusColor
     * @description returns the status color based on the status
     * @param {*} status status of the hackathon 
     * @returns {string} color of the status
     */
    const statusColor = (status) => {
        if (status === 'Upcoming') {
            return 'bg-[#F2C94C40]'
        }
        else if (status === 'Active') {
            return 'bg-[#44924C3D]'
        }
        else {
            return 'bg-[#FF3C002B]'
        }
    }

    /**
     * @name statusTimeText
     * @param {*} status status of the hackathon
     * @returns {string} time word based on the status
     */
    const statusTimeText = (status) => {
        if (status === 'Upcoming') {
            return 'Starts in'
        }
        else if (status === 'Active') {
            return 'Ends in'
        }
        else {
            return 'Ended on'
        }
    }

    /**
     * @name statusTime     
     * @param {*} status status of the hackathon
     * @param {*} startTime start time of the hackathon
     * @param {*} endTime end time of the hackathon
     * @returns {string} time based on the status
     */
    const statusTime = (status, startTime, endTime) => {
        if (status === 'Upcoming') {
            return startTime
        }
        else if (status === 'Active') {
            return endTime
        }
        else {
            return endTime
        }
    }
    /**
     * @name endedDate
     * @description returns the date of the hackathon ended in human readable format
     * @param {*} endTime end time of the hackathon
     * @returns {string} time in days
     */
    const endedData = (endTime) => {
        const stripedDate = endTime.split("-");
        const date = new Date(stripedDate[0], stripedDate[1] - 1, stripedDate[2]);
        const DateFormat = date.toDateString().split(" ");
        const humanReadableDate = DateFormat[2] + " " + DateFormat[1] + " " + DateFormat[3];
        return humanReadableDate;
    }

    /**
     * @name calculateTimeRemaining
     * @param {*} statusTime time of the hackathon
     * @returns {string} time in days
     */
    const calculateTimeRemaining = (statusTime) => {
        const now = new Date()
        const then = new Date(startTime)
        const diff = then - now
        const days = Math.floor(diff / 1000 / 60 / 60 / 24)
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24
        const minutes = Math.floor(diff / 1000 / 60) % 60
        return { days, hours, minutes}
    }

    const { days, hours, minutes} = calculateTimeRemaining(startTime)

    const navigate = useNavigate();

    return (
        <div className='flex flex-col bg-white border-[0.5px] md:w-[25rem] h-auto  rounded-2xl'>
            <img className='rounded-t-2xl' src={img} alt="Data Science Bootcamp - Graded Datathon" />

            <div className='flex flex-col items-center m-8 '>
                <div className={`text-black ${statusColor(status)} px-4 py-1 rounded-xl text-sm m-2`}>
                    {status}
                </div>
                <div className='text-black text-center font-semibold pb-4'>
                    {title}
                </div>

                <div className='flex flex-col items-center text-[#444444] font-semibold'>
                    <div>
                        {statusTimeText(status)}
                    </div>
                    {status === 'Past'
                        ?
                        <div>{endedData(statusTime(status, startTime, endTime))}</div>
                        :
                        <div className='flex text-[#444444] font-bold'>
                            <div className='flex flex-col'>
                                <span className='text-3xl'>{days + 1}</span>
                                <span className='font-normal'>
                                    Days
                                </span>
                            </div>
                            <div className='text-3xl mx-3'>:</div>
                            <div className='flex flex-col'>
                                <span className='text-3xl'>{hours + 1}</span>
                                <span className='font-normal'>
                                    Hours
                                </span>
                            </div>
                            <div className='text-3xl mx-3'>:</div>
                            <div className='flex flex-col'>
                                <span className='text-3xl'>{minutes + 1}</span>
                                <span className='font-normal'>
                                    Mins
                                </span>
                            </div>

                        </div>}


                </div>

                <button onClick={() => navigate(`/details/${id}`)} className='flex items-center bg-[#44924C] px-4 py-2 rounded-xl m-6'>
                    <img className='mr-4 w-[20px]' src={tick} alt="tick" />
                    Participate Now
                </button>

            </div>


        </div>
    )
}

export default HackCard