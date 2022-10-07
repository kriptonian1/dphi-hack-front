import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { arrowGreen, cloud_upload, imagefill } from '../assets/icons';
import { Navbar } from '../components'

/**
 * @name Edit
 * @description renders the edit page
 * @returns {JSX.Element} Edit page
 */
const Edit = () => {

  const currentDate = new Date();
  const [image, setImage] = useState(null)


  /**
   * @name onImageChange
   * @description handles the image change
   * @param {*} event event of the image change
   */
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>

      <Helmet>
        <title>Edit Hackathon | DPhi</title>
      </Helmet>

      <Navbar />
      <div className='py-[5vh] px-[6vw] bg-[#F8F9FD]'>
        <h1 className='text-3xl font-semibold'>Challenge Details</h1>
      </div>

      <form className='flex flex-col px-[6vw] py-10'>

        <div className='flex flex-col pb-8'>
          <label className='text-[#333333] pb-3'>
            Challenge Name
          </label>
          <input className='border-2 border-[#B7B7B7] px-5 py-2 w-[350px] rounded ' required type="text" placeholder="Enter challenge name" />
        </div>

        <div className='flex flex-col pb-8'>
          <label htmlFor="start" className='text-[#333333] pb-3'>
            Start Date
          </label>
          <input id="start" onChange={(e) => handleDateChange(e)} className='border-2 border-[#B7B7B7] px-5 py-2 w-[350px] rounded ' required type="date" min={currentDate} placeholder="Enter challenge name" />
        </div>

        <div className='flex flex-col pb-8'>
          <label htmlFor="end" className='text-[#333333] pb-3'>
            End Date
          </label>
          <input id="end" className='border-2 border-[#B7B7B7] px-5 py-2 w-[350px] rounded ' required type="date" min={currentDate} placeholder="Enter challenge name" />
        </div>

        <div className='flex flex-col pb-8'>
          <label htmlFor="start" className='text-[#333333] pb-3'>
            Description
          </label>
          <textarea required className='border-2  border-[#B7B7B7] px-5 py-2 w-[60vw] md:w-[50vw] rounded ' id="story" name="story"
            rows="5" cols="33" placeholder='Describe the challenge ' />
        </div>

        <div className='flex flex-col pb-8'>
          <label htmlFor="start" className='text-[#333333] pb-3'>
            Image
          </label>
          {image ?
            <div className='flex'>
              <div className=' flex flex-col bg-[#F8F9FD] pt-8 px-8 rounded-xl'>
                <img className='rounded-2xl bg-contain bg-center w-[20rem] h-[10rem]' src={image} alt="preview image" />

                <label className="flex items-center space-x-3 cursor-pointer m-3">
                  <img src={imagefill} alt="upload" />
                  <span className=" text-base leading-normal text-[#44924C]">Change image</span>
                  <img src={arrowGreen} alt="point" />
                  <input onChange={onImageChange} accept="image/*" type='file' className="hidden" />
                </label>
              </div>
            </div>

            :
            <label className="w-64 flex flex-row space-x-5 justify-center items-center font-semibold px-2 py-2 bg-[#F4F4F4] hover:bg-[#c4c4c4] text-[#666666] rounded-lg shadow-lg border border-[#D9D9D9] cursor-pointer">
              <span className=" text-base leading-normal">Upload</span>
              <img className='w-8 h-8 ' src={cloud_upload} alt="upload" />
              <input onChange={onImageChange} accept="image/*" type='file' className="hidden" />
            </label>
          }


        </div>

        <div className='flex flex-col pb-8'>
          <label htmlFor="start" className='text-[#333333] pb-3'>
            Level Type
          </label>
          <select className='w-[250px] px-5 py-2 bg-white border-2 border-[#B7B7B7] rounded' required name="level" id="level">
            <option value="Easy">Easy</option>
            <option value="medium">medium</option>
            <option value="difficult">difficult</option>
          </select>
        </div>

        <div>
          <button className='bg-[#44924C] text-white rounded px-7 py-3' type="submit">Create Challenge</button>
        </div>


      </form>

    </div>
  )
}

export default Edit