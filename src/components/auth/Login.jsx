import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link, useNavigate} from 'react-router-dom';
import { path } from '../../constants/constant';
import { handleLogin } from '../../services/userService';
import { actions } from '../../store/actions';


const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState('false')
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = async () => {
        setErrorMessage('')
        try{
            let data = await handleLogin(email, password)
            if(data && data.errCode !== 0){
                setErrorMessage(data.message)
                props.userLoginFail()
            }
            if(data && data.errCode === 0){
                props.userLoginSuccess(data.user);
                
            }
        }catch(e){
            console.log(e)
            props.userLoginFail()
            if(e.response){
                if(e.response.data){
                    setErrorMessage(e.response.data.message)
                }
            }
        }
    }
    let navigate = useNavigate()
    useEffect(() => {
        if(props.isLoggedIn){
            if(props.userInfo.role_id === 3){
                return navigate("/")
            }
            if(props.userInfo.role_id === 1 || props.userInfo.role_id === 2){
                return navigate("/dashboard")
            }
        }
    },[props.isLoggedIn])
    const handleShowPassword = () =>{
        setShowPass(!showPass)
    }
    return <div className="h-auto bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white rounded shadow-md md:w-1/2 md:max-w-sm w-5/6 md:py-8 mt-20 flex items-center flex-col mb-3">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
            <div className="mt-8 md:w-3/4 w-5/6 flex flex-col">
                <input autoFocus
                    className="block border border-grey-light w-full p-3 rounded mb-4 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="email" placeholder="Email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></input>
                <div className="flex justify-between items-center">
                    <input autoFocus
                        className="block border border-grey-light w-full p-3 rounded mb-4 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="password" placeholder="Password"
                        type={showPass ? 'password' : 'text'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                    <i
                        className={showPass ? 'fas fa-eye ml-3 mb-2 cursor-pointer' : 'fas fa-eye-slash ml-3 mb-2 cursor-pointer'}
                        onClick={handleShowPassword}
                    ></i>
                </div>
                <div className="mb-4">
                    <span className="text-xl text-red-600">{errorMessage}</span>
                </div>
                <button onClick={handleSubmit} className=" text-sm text-center bg-sky-700 text-white py-1 rounded font-medium">
                    Log In
                </button>
            </div>
            <div className="flex justify-evenly space-x-2 w-64 mt-4">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <button className="my-4 flex">
                <div className="bg-no-repeat mr-1"></div>
                <span className="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
            </button>
            <a href="fb.com/nhantrung.ho" className="text-xs text-blue-900 md:mt-4 pd-12 cursor-pointer md:-mb-4 mb-4">Forgot password?</a>
        </div>
        <div className="bg-white rounded shadow-md text-center md:w-1/2 md:max-w-sm w-5/6 py-4">
            <span className="text-sm">Don't have an account?</span>
            <Link to={path.SIGNUP} className="text-blue-500 text-sm font-semibold">Sign up</Link>
        </div>
        <br></br>
        <br></br>
    </div>
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

