import React, { memo, useState } from 'react';
import Select from 'react-select';

const ServicePicker = ({getService}) => {
    const options = [
        { value: 'Cạo lông', label: 'Cạo lông' },
        { value: 'Tắm sấy', label: 'Tắm sấy' },
        { value: 'Khám bệnh', label: 'Khám bệnh' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const changeSelectedOption = (selectedOption) => {
        setSelectedOption(selectedOption);
        getService(selectedOption.value);
    }
    
    return (
        <div className="mt-20 flex justify-center">
            <span className="py-2 px-3 text-gray-700 text-xl">Select Service: </span>
            <Select
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={selectedOption}
                onChange={options => {changeSelectedOption(options)}}
                options={options}
            />
        </div>
    )
}

export default memo(ServicePicker);