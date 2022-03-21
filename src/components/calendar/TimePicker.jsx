import React, { memo, useEffect, useState } from 'react';

const TimePicker = ({ getTime, booking }) => {
    const initialTime = [
        { id: '8:00 - 9:00', diabled: false, display: '8:00 - 9:00' },
        { id: '9:00 - 10:00', diabled: false, display: '9:00 - 10:00' },
        { id: '10:00 - 11:00', diabled: false, display: '10:00 - 11:00' },
        { id: '11:00 - 12:00', diabled: false, display: '11:00 - 12:00' },
        { id: '13:00 - 14:00', diabled: false, display: '13:00 - 14:00' },
        { id: '14:00 - 15:00', diabled: false, display: '14:00 - 15:00' },
        { id: '15:00 - 16:00', diabled: false, display: '15:00 - 16:00' },
        { id: '17:00 - 18:00', diabled: false, display: '17:00 - 18:00' },
    ]
    const [allTime, setAllTime] = useState(initialTime)
    const [load, setLoad] = useState(false)
    const [time, setTime] = useState(null)
    const handleClickTime = (id, isDisabled) => {
        if (!isDisabled) {
            setTime(id)
            getTime(id)
        }
    }
    const fetchTime = () => {
        for (let i = 0; i < allTime.length; i++) {
            if (booking.length > 0) {
                for (let j = 0; j < booking.length; j++) {
                    if (allTime[i].id === booking[j].time) {
                        allTime[i].diabled = true;
                        break;
                    } else {
                        allTime[i].diabled = false;
                    }
                }
            } else {
                allTime[i].diabled = false;
            }
        }
        setAllTime(allTime)
        setLoad(true)
    }

    const active = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-transparent bg-blue-500 font-semibold text-white py-2 px-4 border  border-transparent rounded"
    const inActive = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
    const disabled = "md:w-1/5 md:mx-2 w-2/3 mx-auto my-5 bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded cursor-not-allowed"

    useEffect(() => {
        fetchTime()
    }, [booking, load])
    return (
        <div>
            <span className="py-2 px-3 text-gray-700 text-xl">Select Time:</span>
            <div className="flex flex-wrap justify-between items-center my-5">

                {allTime &&
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

export default memo(TimePicker);