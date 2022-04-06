import axios from "../axios"
const handleGetOverView = (params) => {
    return axios.get(`/api/admin/get-overview?${params}`)
}
const handleAdminGetOrder = (params) => {
    return axios.get(`/api/admin/get-order?${params}`)
}
const handleAdminCancelOrder = (params) => {
    return axios.post(`/api/admin/cancel-order?${params}`)
}
const handleConfirmOrder = (params) => {
    return axios.post(`/api/admin/confirm-order?${params}`)
}
const handleGetBookingByAdmin = (params) => {
    return axios.get(`/api/admin/get-booking?${params}`)
}

const handleGetUserByAdmin = (params) => {
    return axios.get(`/api/admin/get-all-user?${params}`)
}
const handleAddNewAdmin = (userID,name, email, phoneNumber, password, password2) => {
    return axios.post(`/api/admin/add-new-admin?userID=${userID}`, {name, email, phoneNumber, password, password2})
}
const handleAdminGetAllProduct = (params) => {
    return axios.get(`/api/admin/get-all-products?${params}`)
}
const handleAdminGetProductSoldOut = (params) => {
    return axios.get(`/api/admin/get-products-sold-out?${params}`)
}
const handleFetchProductInfo = (params) => {
    return axios.get(`/api/admin/get-product-info?${params}`)
}
export {
    handleGetOverView,
    handleAdminGetOrder,
    handleAdminCancelOrder,
    handleConfirmOrder,
    handleGetBookingByAdmin,
    handleGetUserByAdmin,
    handleAddNewAdmin,
    handleAdminGetAllProduct,
    handleAdminGetProductSoldOut,
    handleFetchProductInfo,
}