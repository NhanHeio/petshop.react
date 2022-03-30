import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useSnackbar } from 'notistack';
import InputDatePicker from '../components/calendar/InputDatePicker';
import ServicePicker from '../components/calendar/ServicePicker';
import TimePicker from '../components/calendar/TimePicker';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { handleBookings, handleGetBookings } from '../services/bookingService';

const Calendar = (props) => {
  const imageLink = [
    { name: 'Cạo lông', url: 'https://i.pinimg.com/originals/02/0b/28/020b285836a5fdeb72c71e47f0a097ee.jpg' },
    { name: 'Tắm sấy', url: 'https://i.pinimg.com/originals/d5/2d/5b/d52d5b481f67185928494f17ce8700aa.jpg' },
    { name: 'Khám bệnh', url: 'https://i.pinimg.com/originals/d3/f2/83/d3f283f6a49cf414497721ad49aae531.jpg' },
  ]

  const [service, setService] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [booking, setBooking] = useState([])
  const [load, setLoad] = useState(false)
  const userID = props.isLoggedIn ? props.userInfo.id : null
  const userName = props.isLoggedIn ? props.userInfo.name : null
  const { enqueueSnackbar } = useSnackbar();
  let value = {
    userID,
    userName,
    service,
    date,
    time,
  }
  

  const getService = (id) => {
    setService(id)
  }
  const getDate = (date) => {
    setDate(date.substr(0,15))
    setLoad(true)
  }
  const getTime = (time) => {
    setTime(time)
  }

  const fetchBookings = async () => {
    const response = await handleGetBookings(value.date)
    setBooking(response.calendar)
  }

  const handleSubmitBooking = async () => {
    if(props.isLoggedIn){
      if(!value.date || !value.service || !value.time || !value.userID){
        enqueueSnackbar('Missng parameters!', {
          variant: 'error',
          autoHideDuration: 3000
        })
      }else{
        let params = queryString.stringify(value)
        const response = await handleBookings(params)
        if(response.errCode === 0){
          enqueueSnackbar('Booking service successfully!', {
            variant: 'success',
            autoHideDuration: 3000
          })
          setLoad(true)
        }else{
          enqueueSnackbar('Something was wrong when you booking!', {
            variant: 'error',
            autoHideDuration: 3000
          })
        }
      }
    }else{
      //not login
      enqueueSnackbar('Please Login', {
        variant: 'error',
        autoHideDuration: 3000
      })
    }
  }

  useEffect(() => {
      document.title = 'Calendar'
  },[])
  useEffect(() => {
    
      fetchBookings()
      return setLoad(false)
    
  },[load])

  return <>
  <Header />
  <div className="h-full min-h-screen py-20 bg-gray-50">
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
      <ServicePicker getService={getService} />
      <InputDatePicker getDate={getDate} />
    </div>
    {value.date && <div id="time-picker" className="w-5/6 md:w-1/2 mx-auto mt-3">
      <TimePicker getTime={getTime} booking={booking} />
    </div>}
    {value.date && <div id="button-booking" className="w-5/6 md:w-1/2">
      <button onClick={() => {handleSubmitBooking()}} className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-20 rounded-full">Booking</button>
    </div>}
  </div>
  <Footer />
  </>
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,

  }
}

const mapDispatchToProps = () => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
