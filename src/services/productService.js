import axios from "../axios"

const handleGetType = () => {
    return axios.get(`/api/get-type`)
}
// const handleGetAllProducts = (type_id, page) =>{
//     return axios.get(`/api/get-product-by-type?type_id=${type_id}&page=${page}`)
// }
const handleGetAllProducts = (params) =>{
    return axios.get(`/api/get-all-products?${params}`)
}
const handleGetProductDetails = (id) => {
    return axios.get(`/api/get-product?id=${id}`)
}
const handlePostComment = (params) => {
    return axios.post(`/api/comment-product?${params}`)
}
const handleGetComments = (id) => {
    return axios.get(`/api/get-comment?id=${id}`)
}
const handleGetCart = (userID) => {
    return axios.get(`/api/get-cart?user_id=${userID}`)
}
const handleAddToCart = (params) => {
    return axios.post(`/api/add-to-cart?${params}`)
}
const handleRemoveCart = (id) => {
    return axios.delete(`/api/delete-cart-product?id=${id}`)
}
// const handlePlaceAnOrder = (params) => {
//     return axios.post(`/api/checkout-order?${params}`)
// }
const handlePlaceAnOrder = (user_id,name,phoneNumber,address) => {
    return axios.post(`/api/checkout-order?user_id=${user_id}`,{name,phoneNumber,address})
}
export {
    handleGetType,
    handleGetAllProducts,
    handleGetProductDetails,
    handlePostComment,
    handleGetComments,
    handleGetCart,
    handleRemoveCart,
    handleAddToCart,
    handlePlaceAnOrder,
}