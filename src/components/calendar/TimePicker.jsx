import React, { useState } from 'react';

const TimePicker = () => {
    const allTime = [
        { id: '1', diabled: true, display: '8:00 - 9:00' },
        { id: '2', diabled: false, display: '9:00 - 10:00' },
        { id: '3', diabled: true, display: '10:00 - 11:00' },
        { id: '4', diabled: false, display: '11:00 - 12:00' },
        { id: '5', diabled: true, display: '13:00 - 14:00' },
        { id: '6', diabled: false, display: '14:00 - 15:00' },
        { id: '7', diabled: true, display: '15:00 - 16:00' },
        { id: '8', diabled: false, display: '17:00 - 17:00' },
    ]
    const [time, setTime] = useState(null)
    const handleClickTime = (id, isDisabled) => {
        if(!isDisabled) {
            setTime(id)
        }
    }
    const active = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-transparent bg-blue-500 font-semibold text-white py-2 px-4 border  border-transparent rounded"
    const inActive = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
    const disabled = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded cursor-not-allowed"
    return (
        <div>
            <span className="py-2 px-3 text-gray-700 text-xl">Select Time:</span>
            <div className="flex flex-wrap justify-between items-center my-5">
                {
                    allTime.map((item) => (
                        <button key={item.id}
                            className={(item.diabled ? disabled : ((time === item.id) ? active : inActive))}
                            onClick={() => handleClickTime(item.id, item.diabled)}
                        >
                            {item.display}
                        </button>
                    ))
                }
            </div>

        </div>
    )
}

export default TimePicker