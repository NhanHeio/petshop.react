import axios from "../axios"
const handleGetAllProducts = (page) =>{
    return axios.get(`/api/get-all-products?page=${page}`)
}
const handleGetCart = (userID) => {
    return axios.get(`/api/get-cart?user_id=${userID}`)
}
export {handleGetAllProducts,handleGetCart}