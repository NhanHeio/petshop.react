import React, { useEffect, useState } from 'react';
import axios from '../../../axios';
import { useSnackbar } from 'notistack';

const UserDetails = ({ info, getInfo, updateInfo }) => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [img, setImg] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    let userInfoUpdate = {
        name: info.name,
        email: info.email,
        phoneNumber: info.phoneNumber,
        address: info.address,
        img: info.img,
    }

    const handleUpdateInfo = (name, email, phoneNumber, address) => {
        userInfoUpdate = {
            ...userInfoUpdate,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
        }
        getInfo(userInfoUpdate)
        updateInfo(userInfoUpdate)
    }
    const handleUpload = async () => {
        const fd = new FormData()
        fd.append('email', email)
        fd.append('image', img)
        try {
            const response = await axios({
                method: "post",
                url: "/api/upload-avatar",
                data: fd,
                headers: { "Content-Type": "multipart/form-data" },
            })
            if (response.errCode === 0) {
                userInfoUpdate = {
                    ...userInfoUpdate,
                    img: response.user.img
                }
                getInfo(userInfoUpdate)
                updateInfo(userInfoUpdate)
            } else {
                enqueueSnackbar(response.errMessage, {
                    variant: 'error',
                    autoHideDuration: 3000
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    const choseImg = () => {
        document.getElementById("upload-avatar").click()
    }

    useEffect(() => {
        setName(info.name)
        setPhoneNumber(info.phoneNumber)
        setAddress(info.address)
        setEmail(info.email)
        setAvatar((process.env.REACT_APP_AVATAR + info.img))
    }, [info])
    return (
        <div className="w-1/2">
            <h2 className="text-2xl text-slate-600 mb-3">User Infomation</h2>
            <div className="flex flex-row-reverse justify-around">
                <div className="w-1/3 text-center">
                    <img
                        src={avatar}
                        className="rounded-full w-64 mb-4  mx-auto"
                        alt="Avatar"
                    />
                    <input
                        style={{ display: 'none' }}
                        id="upload-avatar"
                        type="file"
                        onChange={e => setImg(e.target.files[0])}
                    />
                    <button
                        className="w-fit block px-6 py-2.5 mt-2 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg "
                        onClick={() => { choseImg() }}
                    >
                        Chose image
                    </button>
                    <button
                        className="w-fit px-6 py-2.5 mt-2 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => handleUpload()}
                    >
                        Upload
                    </button>

                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="fullname"
                        placeholder="Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="email"
                        placeholder="Email"
                        value={email}
                        readOnly
                    />
                    <input
                        type="text"
                        className="block border border-grey-light w-1/2 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <textarea
                        type="text"
                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Address"
                        name="address"
                        value={address ? address : ''}
                        onChange={(e) => { setAddress(e.target.value) }}
                    />
                    <button
                        type="button"
                        className=" w-fit px-6 py-2.5 mt-2 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => { handleUpdateInfo(name, email, phoneNumber, address) }}
                    >
                        Update Information
                    </button>
                </div>
            </div>
        </div>
    )
}

export default (UserDetails);