import axios from "../axios"

const handleGetType = () => {
    return axios.get(`/api/get-type`)
}
const handleGetAllProducts = (type_id, page) =>{
    return axios.get(`/api/get-product-by-type?type_id=${type_id}&page=${page}`)
}
const handleGetCart = (userID) => {
    return axios.get(`/api/get-cart?user_id=${userID}`)
}
const handleRemoveCart = (id) => {
    return axios.delete(`/api/delete-cart-product?id=${id}`)
}
export {
    handleGetType,
    handleGetAllProducts,
    handleGetCart,
    handleRemoveCart
}