import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../constants/constant';

const SignupComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPass, setShowPass] = useState('false')
    const handleSubmit = () => {
        console.log(
            name,
            email,
            password
        )
    }
    const handleShowPassword = () => {
        setShowPass(!showPass)
    }
    return <div className="bg-gray-50 h-auto flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <div >
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                        <input
                            type={showPass ? 'password' : 'text'}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <i
                            className={showPass ? 'fas fa-eye ml-3 mb-2 cursor-pointer' : 'fas fa-eye-slash ml-3 mb-2 cursor-pointer'}
                            onClick={handleShowPassword}
                        ></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <input
                            type={showPass ? 'password' : 'text'}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={[password2]}
                            onChange={e => setPassword2(e.target.value)}
                        />
                        <i
                            className={showPass ? 'fas fa-eye ml-3 mb-2 cursor-pointer' : 'fas fa-eye-slash ml-3 mb-2 cursor-pointer'}
                            onClick={handleShowPassword}
                        ></i>
                    </div>
                    <button
                        className="w-full text-center py-3 rounded bg-green text-sky-600 hover:bg-green-dark focus:outline-none my-1"
                        onClick={handleSubmit}
                    >Create Account</button>
                </div>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="text-grey-dark mt-6">
                Already have an account?
                <Link to={path.LOGIN} className="no-underline border-b border-blue text-blue-500">
                    Log in
                </Link>.
            </div>
        </div>
        <br></br>
        <br></br>
    </div>
};

export default SignupComponent;
