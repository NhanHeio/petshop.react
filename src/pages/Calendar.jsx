import React, { useEffect } from 'react';
import InputDatePicker from '../components/calendar/InputDatePicker';
import ServicePicker from '../components/calendar/ServicePicker';
import TimePicker from '../components/calendar/TimePicker';

const Calendar = () => {
  const imageLink = [
    { name: 'Cạo lông', url: 'https://i.pinimg.com/originals/02/0b/28/020b285836a5fdeb72c71e47f0a097ee.jpg' },
    { name: 'Tắm sấy', url: 'https://i.pinimg.com/originals/d5/2d/5b/d52d5b481f67185928494f17ce8700aa.jpg' },
    { name: 'Khám bệnh', url: 'https://i.pinimg.com/originals/d3/f2/83/d3f283f6a49cf414497721ad49aae531.jpg' },
  ]

  useEffect(() => {
    document.title = 'Calendar'
  },[])

  return <div className="h-full py-20 bg-gray-50">
    <div className="w-5/6 md:w-3/5 mx-auto my-4 ">
      <span className="py-2 px-3 text-gray-700 text-2xl">About our services:</span>
      <div className="flex flex-col md:flex-row md:justify-around w-full mx-auto ">
        {
          imageLink.map((item, index) => (
            <div key={index} className="flex flex-col md:mt-0 mt-10 w-full md:w-1/3 mx-auto md:mx-10 border rounded">
              <span className="py-2 px-3 text-gray-700 text-xl">{item.name}</span>
              <img className="h-full" src={item.url} alt={item.name} />
            </div>
          ))
        }
      </div>
    </div>
    <div className="flex flex-col md:flex-row mx-auto md:justify-around md:w-1/2">
      <ServicePicker />
      <InputDatePicker />
    </div>
    <div className="w-5/6 md:w-1/2 mx-auto mt-3">
      <TimePicker />
    </div>
    <div className="w-5/6 md:w-1/2">
      <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-20 rounded-full">Booking</button>
    </div>
  </div>;
};

export default Calendar;
