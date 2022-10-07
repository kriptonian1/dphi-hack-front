import React, { useState } from 'react'
import { caretDown, caretUp } from '../../../assets/icons'

const Filter = ({addData,removeData,arrVal}) => {

    const [open, setOpen] = useState(false)

    

    const [selectedAll, setSelectedAll] = useState(false)
    const [selectedActive, setSelectedActive] = useState(false)
    const [selectedUpcoming, setSelectedUpcoming] = useState(false)
    const [selectedPast, setSelectedPast] = useState(false)

    const [selectedEasy, setSelectedEasy] = useState(false)
    const [selectedMedium, setSelectedMedium] = useState(false)
    const [selectedHard, setSelectedHard] = useState(false)

  
    
/**
 * @name handleCheck
 * @description handle the checkbox selection and add the selected value to the array
 *               and remove the unselected value from the array
 * @param {*} e event of the checkbox
 */
    const handleCheck = (e) => {
        const val = e.target.value;

        if (val === 'All') {
            if (selectedAll) {
                setSelectedAll(false)
                removeData(val)
                
            }
            else {
                setSelectedAll(true)
                addData(val)
            }
        }
        else if (val === 'Active') {
            if (selectedActive) {
                setSelectedActive(false)
                removeData(val)
            }
            else {
                setSelectedActive(true)
                addData(val)
            }
        }
        else if (val === 'Upcoming') {
            if (selectedUpcoming) {
                setSelectedUpcoming(false)
                removeData(val)
            }
            else {
                setSelectedUpcoming(true)
                addData(val)
            }
        }
        else if (val === 'Past') {
            if (selectedPast) {
                setSelectedPast(false)
                removeData(val)
            }
            else {
                setSelectedPast(true)
                addData(val)
            }
        }
        else if (val === 'Easy') {
            if (selectedEasy) {
                setSelectedEasy(false)
                removeData(val)
            }
            else {
                setSelectedEasy(true)
                addData(val)
            }
        }
        else if (val === 'Medium') {
            if (selectedMedium) {
                setSelectedMedium(false)
                removeData(val)
            }
            else {
                setSelectedMedium(true)
                addData(val)
            }
        }
        else if (val === 'Hard') {
            if (selectedHard) {
                setSelectedHard(false)
                removeData(val)
            }
            else {
                setSelectedHard(true)
                addData(val)
            }
        }
    }

    return (
        <div>
            {!open ?
                <button onClick={() => setOpen(!open)} className='flex transition ease-out delay-150 items-center bg-white py-2 px-8 text-black rounded-xl'>
                    Filter
                    <img className='ml-6' src={open ? caretUp : caretDown} alt="down" />
                </button>
                :
                <div className='flex flex-col absolute shadow-white shadow-md bg-white  text-black rounded-xl'>
                    <div onClick={() => setOpen(!open)} className='cursor-pointer flex flex-col items-center'>
                        <div className='flex py-2 px-8'>
                            Filter
                            <img className='ml-20' src={open ? caretUp : caretDown} alt="down" />
                        </div>

                        <div className='bg-[#ECECEC] h-[2px] w-[10vw] my-3'></div>
                    </div>

                    <div className='flex flex-col items-start text-[#666666] py-2 px-4'>
                        <p>
                            Status
                        </p>
                        <div className='my-3 text-[#858585]'>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedActive} type="checkbox" name="Active" value="Active" /> Active
                            </div>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedUpcoming} type="checkbox" name="Upcoming" value="Upcoming" /> Upcoming
                            </div>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedPast} type="checkbox" name="Past" value="Past" /> Past
                            </div>

                        </div>
                        <div className='bg-[#ECECEC] h-[2px] w-[10vw] my-3'></div>
                    </div>

                    <div className='flex flex-col items-start text-[#666666] py-2 px-4'>
                        <p>
                            Level
                        </p>
                        <div className='my-3 text-[#858585]'>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedEasy} type="checkbox" name="Easy" value="Easy" /> Easy
                            </div>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedMedium} type="checkbox" name="Medium" value="Medium" /> Medium
                            </div>
                            <div>
                                <input onChange={(e) => handleCheck(e)} checked={selectedHard} type="checkbox" name="Hard" value="Hard" /> Hard
                            </div>
                        </div>

                    </div>
                </div>

            }
        </div>

    )
}

export default Filter