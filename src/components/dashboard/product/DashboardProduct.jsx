import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import queryString from 'query-string';
import axios from '../../../axios';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux'
import { handleAdminGetAllProduct, handleAdminGetProductSoldOut, handleFetchProductInfo, handleDeleteProduct } from '../../../services/adminService'
import Pagination from '../../commerce/Pagination/Pagination';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'white',
    border: '1px solid #333',
    boxShadow: 24,
    p: 4,
};

const DashboardProduct = (props) => {
    const { enqueueSnackbar } = useSnackbar()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        type_id: 4,
        price: 0,
        desc: '',
        quantity: 0,
        img: '',
        provider: '',
        import_id: 4,
        rate: 0,
        total_rate: 0
    });
    const [load, setLoad] = useState(false)
    const [open, setOpen] = useState(false)
    const userID = props.isLoggedIn ? props.userInfo.id : 0
    const [filter, setFilter] = useState({
        userID,
        page: 1
    })
    const [modalTitle, setModalTitle] = useState('')
    const [totalPages, setTotalPages] = useState(0)
    const getPage = (page) => {
        setFilter({
            ...filter,
            page: page
        })
    }
    const fetchProduct = async () => {
        let params = queryString.stringify(filter)
        let response = await handleAdminGetAllProduct(params)
        if (response.errCode === 0) {
            setProducts(response.product.rows)
            setTotalPages(response.totalPages)
            setLoad(true)
        }
    }
    const fetchProductSoldOut = async () => {
        let params = queryString.stringify(filter)
        let response = await handleAdminGetProductSoldOut(params)
        if (response.errCode === 0) {
            setProducts(response.product.rows)
            setTotalPages(response.totalPages)
            setLoad(true)
        }
    }
    const handleClickViewProduct = async (id) => {
        if (id === 0) {
            setModalTitle('Add new product')
            setProduct({})
            setOpen(true)
        } else {
            setModalTitle('Product Details')
            let paramsObject = {
                userID: userID,
                productID: id
            }
            let params = queryString.stringify(paramsObject)
            let response = await handleFetchProductInfo(params)
            if (response.errCode === 0) {
                setProduct(response.product)
            }
            setOpen(true)
        }
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChangeDisplayType = (id) => {
        switch (id) {
            case 4:
                return 'Chó'
            case 14:
                return 'Mèo'
            case 24:
                return 'Cá'
            case 34:
                return 'Động vật nhỏ'
            case 44:
                return 'Bò sát'
            case 54:
                return 'Chim'
            default:
                return ''
        }
    }
    const [view, setView] = useState(1)
    const handleChangeView = (event) => {
        setView(event.target.value)
    }

    //edit  product
    const handleChangeType = (event) => {
        setProduct({
            ...product,
            type_id: event.target.value
        })
    }
    const choseImg = () => {
        document.getElementById("upload-product-img").click()
    }

    const handleClickUpdateProduct = async () => {
        const fd = new FormData()
        fd.append('productID', product.id)
        fd.append('name', product.name)
        fd.append('type_id', product.type_id)
        fd.append('price', product.price)
        fd.append('desc', product.desc)
        fd.append('quantity', product.quantity)
        fd.append('provider', product.provider)
        fd.append('image', product.img)
        fd.append('userID', userID)
        try {
            const response = await axios({
                method: "post",
                url: "/api/admin/update-product",
                data: fd,
                headers: { "Content-Type": "multipart/form-data" },
            })
            if (response.errCode === 0) {
                enqueueSnackbar(response.errMessage, {
                    variant: 'succes',
                    autoHideDuration: 3000
                })
                setOpen(false)
                setLoad(false)
            } else {
                enqueueSnackbar(response.errMessage, {
                    variant: 'error',
                    autoHideDuration: 3000
                })
            }
        } catch (error) {
            enqueueSnackbar(error, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    //delete product
    const handleClickDeletteProduct = async (id) => {
        let paramsObject = {
            userID,
            productID: id
        }
        let params = queryString.stringify(paramsObject)
        let response = await handleDeleteProduct(params)
        if (response.errCode === 0) {
            enqueueSnackbar(response.errMessage, {
                variant: 'succes',
                autoHideDuration: 3000
            })
            setOpen(false)
            setLoad(false)
        } else {
            enqueueSnackbar(response.errMessage, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    //
    useEffect(() => {
        if (view === 1) {
            fetchProduct()
        } else {
            fetchProductSoldOut()
        }
    }, [filter, load, view])
    return (
        <div className="pt-32 w-5/6 h-full px-20">
            <h2 className="text-2xl text-slate-600 mb-3">All Products</h2>
            <div className="flex flex-row-reverse justify-between">
                <button
                    onClick={() => { handleClickViewProduct(0) }}
                    className="w-fit p-2.5 m-3 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Add New</button>
                <div className="w-2/12">
                    <FormControl fullWidth>
                        <InputLabel id="select-view-label">View</InputLabel>
                        <Select
                            labelId="select-view-label"
                            id="select-view"
                            value={view}
                            label="View"
                            onChange={handleChangeView}
                        >
                            <MenuItem value={1}>All</MenuItem>
                            <MenuItem value={2}>Out of Stock</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <table className="w-full table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr className="h-20">
                        <th className="h-8 border border-slate-300 w-1/6">Name</th>
                        <th className="h-8 border border-slate-300 w-1/12">Type</th>
                        <th className="h-8 border border-slate-300 w-1/12">Price</th>
                        <th className="h-8 border border-slate-300 w-1/3">Description</th>
                        <th className="h-8 border border-slate-300 w-1/4">Provider</th>
                        <th className="h-8 border border-slate-300 w-1/12">Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products && (
                            products.map((item) => (
                                <tr
                                    className="cursor-pointer hover:bg-slate-200 h-16"
                                    onClick={() => { handleClickViewProduct(item.id) }}
                                    key={item.id}>
                                    <td className="h-8 border border-slate-300">{item.name}</td>
                                    <td className="h-8 border border-slate-300">{handleChangeDisplayType(item.type_id)}
                                    </td>
                                    <td className="h-8 border border-slate-300">{item.price}</td>
                                    <td className="h-8 border border-slate-300 overflow-hidden whitespace-nowrap text-ellipsis">{item.desc}</td>
                                    <td className="h-8 border border-slate-300">{item.provider}</td>
                                    <td className="h-8 border border-slate-300">{item.quantity}</td>

                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
            <Pagination totalPages={totalPages} getPage={getPage} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component="span">
                        <div>
                            <div className="flex flex-row">
                                <div className="mb-6 w-1/2 flex flex-col px-4">
                                    <label htmlFor="name" className="w-fit font-normal text-md left-0 py-1.5" >Name: </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Name"
                                        name="name"
                                        value={product.name}
                                        onChange={e => setProduct({
                                            ...product,
                                            name: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="mb-6 w-1/3 flex flex-col px-4">
                                    <label htmlFor="quantity" className="w-fit font-normal text-md left-0 py-1.5" >Quantity: </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={product.quantity}
                                        onChange={e => setProduct({
                                            ...product,
                                            quantity: e.target.value
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="mb-6 w-1/3 flex flex-col px-4">
                                    <InputLabel id="label-select-type">Type</InputLabel>
                                    <Select
                                        labelId="label-select-type"
                                        id="select-type"
                                        value={product.type_id}
                                        defaultValue={product.type_id}
                                        label="Type"
                                        onChange={handleChangeType}
                                    >
                                        <MenuItem value={4}>Chó</MenuItem>
                                        <MenuItem value={14}>Mèo</MenuItem>
                                        <MenuItem value={24}>Cá</MenuItem>
                                        <MenuItem value={34}>Động vật nhỏ</MenuItem>
                                        <MenuItem value={44}>Bò sát</MenuItem>
                                        <MenuItem value={54}>Chim</MenuItem>
                                    </Select>
                                </div>
                                <div className="mb-6 w-1/3 flex flex-col px-4">
                                    <label htmlFor="price" className="w-fit font-normal text-md left-0 py-1.5" >Price: </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Price"
                                        name="price"
                                        value={product.price}
                                        onChange={e => setProduct({
                                            ...product,
                                            price: e.target.value
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 w-full flex flex-col px-4">
                                <label htmlFor="desc" className="w-fit font-normal text-md left-0 py-1.5" >Description: </label>
                                <textarea
                                    type="text"
                                    className=" px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Description"
                                    rows="3"
                                    name="desc"
                                    value={product.desc}
                                    onChange={e => setProduct({
                                        ...product,
                                        desc: e.target.value
                                    })}
                                />
                            </div>
                            <div className="mb-6 w-1/3 flex flex-col px-4">
                                <label htmlFor="provider" className="w-fit font-normal text-md left-0 py-1.5" >Provider: </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Provider"
                                    name="provider"
                                    value={product.provider}
                                    onChange={e => setProduct({
                                        ...product,
                                        provider: e.target.value
                                    })}
                                />
                            </div>
                            <div className="flex flex-row">
                                <div className="mb-6 w-1/3 flex flex-col px-4">
                                    <label htmlFor="rate" className="w-fit font-normal text-md left-0 py-1.5" >Rating: </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Rating"
                                        name="rate"
                                        value={product.rate}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-6 w-1/3 flex flex-col px-4">
                                    <label htmlFor="total rating" className="w-fit font-normal text-md left-0 py-1.5" >Total rating: </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Total rating"
                                        name="total rating"
                                        value={product.total_rate}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-fit flex flex-col justify-center">
                                <div div className="w-full h-fit border border-collapse border-slate-600">
                                    <img
                                        className="object-contain h-48 w-96 m-2"
                                        src={process.env.REACT_APP_PRODUCT_IMG + product.img}
                                        //src="https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg"
                                        alt={product.name} />
                                    <button
                                        className="w-fit block px-3 py-2.5 m-2 bg-slate-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-sky-800 hover:shadow-lg "
                                        onClick={() => { choseImg() }}
                                    >
                                        Chose image
                                    </button>
                                </div>
                                <div>
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-product-img"
                                        type="file"
                                        onChange={e => setProduct({
                                            ...product,
                                            img: e.target.files[0],
                                        })}
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <button
                                        onClick={() => { handleClickUpdateProduct() }}
                                        className="w-fit p-2.5 m-1 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >Save</button>
                                    {
                                        (modalTitle === 'Product Details') ?
                                            <button
                                                onClick={() => { handleClickDeletteProduct(product.id) }}
                                                className="w-fit p-2.5 m-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >Delete</button> : <></>
                                    }
                                </div>
                            </div>
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
)(DashboardProduct);