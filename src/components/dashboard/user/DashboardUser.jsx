import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import { connect } from 'react-redux'
import { handleAddNewAdmin, handleGetUserByAdmin } from '../../../services/adminService'
import Pagination from '../../commerce/Pagination/Pagination'
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DashboardUser = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [load, setLoad] = useState(false)
    const [client, setClient] = useState([])
    const [admin, setAdmin] = useState([])
    const [open, setOpen] = useState(false)
    const userID = props.isLoggedIn ? props.userInfo.id : 0
    const [filter, setFilter] = useState({
        userID,
        page: 1
    })
    const [totalUserPages, setTotalUserPages] = useState(1)
    const getPage = (page) => {
        setFilter({
            ...filter,
            page: page
        })
    }
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPass, setShowPass] = useState('false')
    const [errorMessage, setErrorMessage] = useState('')
    const handleShowPassword = () => {
        setShowPass(!showPass)
    }
    const handleClickAddAdmin = async () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const fetchUser = async () => {
        let params = queryString.stringify(filter)
        let response = await handleGetUserByAdmin(params)
        if (response.errCode === 0) {
            setClient(response.user.rows)
            setTotalUserPages(response.totalUserPages)
            setAdmin(response.admin.rows)
        }
        setLoad(true)
    }

    const handleSubmit = async () => {
        setErrorMessage('')
        try {
            let data = await handleAddNewAdmin(userID, name, email, phoneNumber, password, password2)
            if (data && data.errCode !== 0) {
                setErrorMessage(data.message)
            }
            if (data && data.errCode === 0) {
                enqueueSnackbar(data.errMessage, {
                    variant: 'success',
                    autoHideDuration: 3000
                })
                setOpen(false)
            }
        } catch (e) {
            console.log(e)
            if (e.response) {
                if (e.response.data) {
                    setErrorMessage(e.response.data.message)
                }
            }
        }
    }
    useEffect(() => {
        fetchUser()
    }, [filter, load])
    return (
        <div className="pt-32 w-5/6 h-full px-20">
            <div className="flex flex-col">
                <div className="w-full mb-24">
                    <h2 className="text-2xl text-slate-600 mb-3">Administrator</h2>
                    <div className="flex flex-row-reverse">
                        <button
                            onClick={() => { handleClickAddAdmin() }}
                            className="w-fit p-2.5 m-3 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Add New Admin</button>
                    </div>
                    <table className="w-full table-auto border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="h-8 border border-slate-300 w-1/12">No</th>
                                <th className="h-8 border border-slate-300 w-1/12">Role</th>
                                <th className="h-8 border border-slate-300 w-1/5">Name</th>
                                <th className="h-8 border border-slate-300 w-1/5">Phone Number</th>
                                <th className="h-8 border border-slate-300 w-1/5">Email</th>
                                <th className="h-8 border border-slate-300 w-1/3">Address</th>
                                <th className="h-8 border border-slate-300 w-1/12">Control</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admin && (
                                    admin.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="h-8 border border-slate-300">{index + 1}</td>
                                            <td className="h-8 border border-slate-300">{item.role_id === 1 ? 'Supervisor' : 'Administrator'}</td>
                                            <td className="h-8 border border-slate-300">{item.name}</td>
                                            <td className="h-8 border border-slate-300">{item.phone_number}</td>
                                            <td className="h-8 border border-slate-300">{item.email}</td>
                                            <td className="h-8 border border-slate-300">{item.address}</td>
                                            <td className="h-8 border border-slate-300">
                                                <button
                                                    className="w-fit p-2.5 m-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="w-full">
                    <h2 className="text-2xl text-slate-600 mb-3">Clients</h2>

                    <table className="w-full table-auto border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="h-8 border border-slate-300 w-1/12">No</th>
                                <th className="h-8 border border-slate-300 w-1/5">Name</th>
                                <th className="h-8 border border-slate-300 w-1/5">Phone Number</th>
                                <th className="h-8 border border-slate-300 w-1/5">Email</th>
                                <th className="h-8 border border-slate-300 w-1/3">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                client && (
                                    client.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="h-8 border border-slate-300">{index + 1}</td>
                                            <td className="h-8 border border-slate-300">{item.name}</td>
                                            <td className="h-8 border border-slate-300">{item.phone_number}</td>
                                            <td className="h-8 border border-slate-300">{item.email}</td>
                                            <td className="h-8 border border-slate-300">{item.address}</td>
                                        </tr>
                                    ))
                                )
                            }

                        </tbody>
                    </table>
                    <Pagination totalUserPages={totalUserPages} getPage={getPage} />
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new administrator
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component="span">
                        <div>
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
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phonenumber"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
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
                            <div className="mb-4">
                                <span className="text-xl text-red-600">{errorMessage}</span>
                            </div>
                            <button
                                className="w-full text-center py-3 rounded bg-green text-sky-600 hover:bg-green-dark focus:outline-none my-1"
                                onClick={handleSubmit}
                            >Create Account</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardUser);