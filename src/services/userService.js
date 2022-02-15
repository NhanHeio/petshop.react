import axios from "../axios"
const handleLogin = (email, password) => {
    return axios.post('/api/login', {email, password})
}
const handleSignup = (name, email, phoneNumber, password, password2) => {
    return axios.post('/api/signup', {name, email, phoneNumber, password, password2})
}
export { handleLogin,handleSignup }