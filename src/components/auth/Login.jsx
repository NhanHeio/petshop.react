import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../constants/constant';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState('false')
    const handleSubmit = () => {
        console.log(
            email,
            password
        )
    }
    const handleShowPassword = () =>{
        setShowPass(!showPass)
    }
    return <div className="h-auto bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white rounded shadow-md w-80 py-8 flex items-center flex-col mb-3">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
            <div className="mt-8 w-64 flex flex-col">
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
                <button onClick={handleSubmit} className=" text-sm text-center bg-sky-700 text-white py-1 rounded font-medium">
                    Log In
                </button>
            </div>
            <div className="flex justify-evenly space-x-2 w-64 mt-4">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <button className="mt-4 flex">
                <div className="bg-no-repeat mr-1"></div>
                <span className="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
            </button>
            <a href="fb.com/nhantrung.ho" className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
        </div>
        <div className="bg-white rounded shadow-md text-center w-80 py-4">
            <span className="text-sm">Don't have an account?</span>
            <Link to={path.SIGNUP} className="text-blue-500 text-sm font-semibold">Sign up</Link>
        </div>
        <br></br>
        <br></br>
    </div>
};

export default Login;
