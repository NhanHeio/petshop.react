import React, { useEffect, useState } from 'react'
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import queryString from 'query-string';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux'
import { handleGetOrderByOrderID, handleGetOrderByUser, handleCancelOrder } from '../../../services/productService'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrderHistory = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [order, setOrder] = useState([])
    const [orderItem, setOrderItem] = useState([])
    const [load, setLoad] = useState(false)
    const [open, setOpen] = useState(false)
    const userID = props.isLoggedIn ? props.userInfo.id : 0

    const fetchOrderHistory = async (userID) => {
        let response = await handleGetOrderByUser(userID)
        if (response.errCode === 0) {
            setOrder(response.orderList)
            setLoad(true)
        }

    }
    const fetchOrderItem = async (id) => {
        let response = await handleGetOrderByOrderID(id)
        if (response.errCode === 0) {
            setOrderItem(response.orderItem)
        }
    }

    const handleClickViewOrder = async (id) => {
        await fetchOrderItem(id)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickCancelOrder = async (id) => {
        let paramsObject = {
            id,
            userID
        }
        let params = queryString.stringify(paramsObject)
        let response = await handleCancelOrder(params)
        if (response.errCode === 0) {
            enqueueSnackbar(response.errMessage, {
                variant: 'success',
                autoHideDuration: 3000
            })
            setOrder(response.orderList)
            setLoad(true)
        }else{
            enqueueSnackbar(response.errMessage, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    useEffect(() => {
        fetchOrderHistory(userID)
    }, [userID, load])

    return (
        <div className="w-1/2">
            <h2 className="text-2xl text-slate-600 mb-3">Order History</h2>
            <table className="w-full table-auto border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="h-8 border border-slate-300 w-1/12">No</th>
                        <th className="h-8 border border-slate-300 w-2/5">Address</th>
                        <th className="h-8 border border-slate-300 w-1/4">Total Price</th>
                        <th className="h-8 border border-slate-300 w-1/3">Status</th>
                        <th className="h-8 border border-slate-300 w-1/12">Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order && (
                            order.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="h-8 border border-slate-300">{index + 1}</td>
                                    <td className="h-8 border border-slate-300">{item.address}</td>
                                    <td className="h-8 border border-slate-300">{item.total_price}</td>
                                    {
                                        (item.status === 'Waiting for confirm') ?
                                            (
                                                <td className="h-8 border border-slate-300 text-red-600">{item.status}</td>
                                            ) :
                                            (
                                                <td className="h-8 border border-slate-300 text-blue-600">{item.status}</td>
                                            )
                                    }
                                    <td className="h-8 border border-slate-300">
                                        <div className="flex flex-row">
                                            <button
                                                onClick={() => { handleClickViewOrder(item.id) }}
                                                className="w-fit p-2.5 m-1 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >View</button>
                                            {
                                                (item.status === 'Waiting for confirm') ?
                                                    (<button
                                                        onClick={() => { handleClickCancelOrder(item.id) }}
                                                        className="w-fit p-2.5 m-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    >Cancel</button>) : <></>

                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Order Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>

                            {orderItem && (
                                orderItem.map((item) => (
                                    <div key={item.id} className="flex flex-wrap w-2/5 my-3 mx-auto p-3 rounded-md border-2 border-slate-200">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center"></img>
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">{item.product_name}</a>
                                                    </h3>
                                                    <span className="ml-4">{item.price}đ</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <span className="text-gray-500">Quantity: {item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
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
)(OrderHistory);