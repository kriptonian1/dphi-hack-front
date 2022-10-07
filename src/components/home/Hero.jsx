import React from 'react'
import { useNavigate } from 'react-router-dom'
import { aiBot, aiLogo, dataMan, rocket } from '../../assets/icons'
import preventOnDragImg from '../../utils/preventOnDragImg'

/**
 * @name Hero
 * @description This is the Hero component.1
 * @returns {JSX.Element} Hero component
 */
const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className=' text-white'>
            <div className='flex justify-evenly bg-[#003145] py-[10vh] px-[6vw]'>
                <div className='flex space-x-[4vw]'>
                    <div className='w-[9.71px] h-[115.91px] bg-[#FFCE5C]'></div>
                    <div>
                        <h1 className='font-Poppins text-4xl md:text-5xl font-bold'>
                            Accelerate Innovation <br /> with Global AI Challenges
                        </h1>

                        <div className='md:w-[30vw] pt-6 text-lg'>
                            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                        </div>

                        <div>
                            <button onClick={() => navigate('/create-event')} className='font-Poppins py-2 px-4 mt-6 hover:bg-[#F0F0F0] hover:shadow-xl bg-white text-[#003145] rounded-md'>
                                Create Challenge
                            </button>
                        </div>
                    </div>
                </div>

                <img onDragStart={() =>preventOnDragImg()} className='hidden md:flex' src={rocket} alt="rocket" />


            </div>

            <div className='bg-[#002A3B] py-[10vh] flex space-y-10 md:space-x-[9vw] md:space-y-0 md:items-center md:justify-center flex-col md:flex-row px-[6vw]'>
                <div className='flex '>
                    <img className='mx-3' src={aiLogo} alt="ailogo" />
                    <div>
                        <div className='font-semibold text-2xl'>
                            100K+
                        </div>
                        <div>
                            AI model submissions
                        </div>
                    </div>
                </div>

                <div className='bg-[#C4C4C4] w-[1px] hidden md:flex h-[38px]'></div>

                <div className='flex '>
                    <img className='mx-3' src={dataMan} alt="ailogo" />
                    <div>
                        <div className='font-semibold text-2xl'>
                            50K+
                        </div>
                        <div>
                            Data Scientists
                        </div>
                    </div>
                </div>

                <div className='bg-[#C4C4C4] w-[1px] h-[38px] hidden md:flex'></div>

                <div className='flex '>
                    <img className='mx-3' src={aiBot} alt="ailogo" />
                    <div>
                        <div className='font-semibold text-2xl'>
                            100+
                        </div>
                        <div>
                            AI Challenges hosted
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero