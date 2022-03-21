import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')

    const handleClickChangePass = () => {

    }
    return (
        <div className="w-1/3">
            <h2 className="text-2xl text-slate-600 mb-3">Change Password</h2>
            <div>
                <div>
                    <label htmlFor="oldPass" className=" font-normal text-md text-left py-1.5" >Old password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="oldPass"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="newPass" className=" font-normal text-md text-left py-1.5" >New password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="newPass"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="newPass2" className=" font-normal text-md text-left py-1.5" >Retype new password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="newPass2"
                        value={newPassword2}
                        onChange={e => setNewPassword2(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className=" w-fit px-6 py-2.5 mt-2 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => { handleClickChangePass() }}
                >
                    Change Password
                </button>
            </div>
        </div>
    )
}

export default ChangePassword