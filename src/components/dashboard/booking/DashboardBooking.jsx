import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import { connect } from 'react-redux'
import { handleGetBookingByAdmin } from '../../../services/adminService'
import Pagination from '../../commerce/Pagination/Pagination'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DashboardBooking = (props) => {
    const [load, setLoad] = useState(false)
    const [view, setView] = useState(1)
    const [service, setService] = useState([])
    const userID = props.isLoggedIn ? props.userInfo.id : 0
    const [filter, setFilter] = useState({
        userID,
        page: 1,
        view: 1
    })
    const [totalPages, setTotalPages] = useState(0)
    const getPage = (page) => {
        setFilter({
          ...filter,
          page: page
        })
      }

      const handleChangeView = (event) => {
        setView(event.target.value)
        setFilter({
            ...filter,
            view: event.target.value
        })
    }

    const fetchBooking = async () => {
        let params = queryString.stringify(filter)
        let response = await handleGetBookingByAdmin(params)
        if (response.errCode === 0) {
            setService(response.listService.rows)
            setTotalPages(response.totalPages)
        }
        setLoad(true)
    }
    useEffect(() => {
        fetchBooking()
    }, [filter, load, view])
    return (
        <div className="pt-32 w-5/6 h-full px-20">
            <h2 className="text-2xl text-slate-600 mb-3">Booking History</h2>
            <div className="w-1/12">
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
                        <th className="h-8 border border-slate-300 w-1/12">Date</th>
                        <th className="h-8 border border-slate-300 w-1/3">Name</th>
                        <th className="h-8 border border-slate-300 w-1/5">Date Booking</th>
                        <th className="h-8 border border-slate-300 w-1/5">Time</th>
                        <th className="h-8 border border-slate-300 w-1/4">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service && (
                            service.map((item) => (
                                <tr key={item.id}>
                                    <td className="h-8 border border-slate-300">{item.createdAt.slice(0,10)}</td>
                                    <td className="h-8 border border-slate-300">{item.username}</td>
                                    <td className="h-8 border border-slate-300">{item.date}</td>
                                    <td className="h-8 border border-slate-300">{item.time}</td>
                                    <td className="h-8 border border-slate-300">{item.service}</td>
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
            <Pagination totalPages={totalPages} getPage={getPage} />
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
)(DashboardBooking);