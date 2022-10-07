import React from 'react'
import { community, IdentificationCard, notebook, robot } from '../../assets/icons'

/**
 * @name SectionInfo
 * @description This component is used to display the information of about the hackathon 
 * @returns {JSX.Element} SectionInfo component
 */
const SectionInfo = () => {

    const cardData = [
        {
            title: "Prove your skills",
            description: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
            icon: notebook
        },
        {
            title: "Learn from community",
            description: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
            icon: community
        },
        {
            title: "Challenge yourself",
            description: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
            icon: robot
        },
        {
            title: "Earn recognition",
            description: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
            icon: IdentificationCard
        }
    ]

    return (
        <div className='py-[10vh] px-[6vw]'>
            <div className='font-Poppins text-3xl flex justify-center font-semibold  md:flex-row flex-col'>
                <h2>Why Participate in </h2><p className='text-[#44924C] md:pl-1'> AI Challenges?</p>
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    {cardData.map((data, index) => (
                        <div key={index} className='bg-[#F8F9FD] md:w-[30rem] h-[20rem] rounded-lg py-20 px-10 my-9 md:m-9'>
                            <img src={data.icon} alt="notebook" />
                            <div className='font-Poppins text-black text-xl font-semibold  mt-5'>
                                {data.title}
                            </div>
                            <div className='font-Poppins text-[#64607D] text-base font-normal mt-5'>
                                {data.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default SectionInfo