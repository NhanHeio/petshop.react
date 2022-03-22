import axios from "../axios"

const handleGetBookings = (date) => {
    return axios.get(`/api/get-booking-calendar?date=${date}`)
}
const handleBookings = (params) => {
    return axios.post(`/api/booking?${params}`)
}
const handleGetBookingByUser = (userID) => {
    return axios.get(`/api/get-booking/user?userID=${userID}`)
}
const handleCancelBooking = (params) => {
    return axios.post(`/api/cancel-booking?${params}`)
}

export {
    handleGetBookings,
    handleBookings,
    handleGetBookingByUser,
    handleCancelBooking,
}