import React, { memo, useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const InputDatePicker = ({getDate}) => {
    const [date, setDate] = useState(new Date())
    const changeSelectedOption = (date) => {
        setDate(date)
        getDate(date.toString())
    }
    
    return (
        <div className="mt-20">
            <span className="text-gray-700 text-xl">Select date: </span>
            <Flatpickr
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={date}
                options={{
                    minDate: "today",
                    maxDate: new Date().fp_incr(7),
                    altInput: false,
                    dateFormat: "d-m-Y"
                }}
                onChange={date => {
                    changeSelectedOption(date)
                }}
            />

        </div>
    )
}

export default memo(InputDatePicker);