import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useSnackbar } from 'notistack';
import { handleCancelBooking, handleGetBookingByUser } from '../../../services/bookingService';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const BookingHistory = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [view, setView] = useState(1)
    const [load, setLoad] = useState(false)
    const [service, setService] = useState([])
    const userID = props.isLoggedIn ? props.userInfo.id : 0
    const fetchBookingHistory = async (userID) => {
        let response = await handleGetBookingByUser(userID)
        if (response.errCode === 0) {
            setService(response.listService)
        }
        setLoad(true)
    }
    const handleChangeView = (event) => {
        setView(event.target.value)
        if(event.target.value === 2){
            for(let i = 0; i < service.length; i++) {
                if(new Date(service[i].date) > new Date()){
                    delete service[i]
                }
            }
        }else{
            fetchBookingHistory(userID)
        }
    }

    const handleClickCancelBooking = async (id) => {
        let paramsObject = {
            userID,
            id
        }
        let params = queryString.stringify(paramsObject)
        let response = await handleCancelBooking(params)
        if (response.errCode === 0) {
            enqueueSnackbar(response.errMessage, {
                variant: 'success',
                autoHideDuration: 3000
            })
            setService(response.listService)
            setLoad(true)
        } else {
            enqueueSnackbar(response.errMessage, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }
    useEffect(() => {
        fetchBookingHistory(userID)
    }, [userID, load])

    return (
        <div className="w-1/2">

            <h2 className="text-2xl text-slate-600 mb-3">Booking History</h2>
            <div className="w-2/12">
                <FormControl fullWidth>
                    <InputLabel id="select-view-label">View</InputLabel>
                    <Select
                        labelId="select-view-label"
                        id="select-view"
                        value={view}
                        label="View"
                        onChange={handleChangeView}
                    >
                        <MenuItem value={1}>All</MenuItem>
                        <MenuItem value={2}>Undue</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <table className="w-full table-auto border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="h-8 border border-slate-300 w-1/12">No</th>
                        <th className="h-8 border border-slate-300 w-1/3">Service</th>
                        <th className="h-8 border border-slate-300 w-1/3">Date</th>
                        <th className="h-8 border border-slate-300 w-1/3">Time</th>
                        <th className="h-8 border border-slate-300 w-1/12">Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service && (
                            service.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="h-8 border border-slate-300">{index + 1}</td>
                                    <td className="h-8 border border-slate-300">{item.service}</td>
                                    <td className="h-8 border border-slate-300">{item.date}</td>
                                    <td className="h-8 border border-slate-300">{item.time}</td>
                                    <td className="h-8 border border-slate-300">
                                        {
                                            (new Date(item.date) > new Date()) ?
                                                <button
                                                    onClick={() => { handleClickCancelBooking(item.id) }}
                                                    className="w-fit p-2.5 m-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >Cancel</button> : <></>
                                        }
                                    </td>
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingHistory);