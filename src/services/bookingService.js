import axios from "../axios"

const handleGetBookings = (date) => {
    return axios.get(`/api/get-booking-calendar?date=${date}`)
}
const handleBookings = (params) => {
    return axios.post(`/api/booking?${params}`)
}

export {
    handleGetBookings,
    handleBookings
}