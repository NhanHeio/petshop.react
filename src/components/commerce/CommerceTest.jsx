import React, { useState, useEffect } from 'react';
import { handleGetAllProducts } from '../../services/productService';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { handleRemoveCart } from '../../services/productService';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
import { Link } from 'react-router-dom';
import { handleGetCart } from '../../services/productService';
import './commerceSidebar.scss'

const CommerceTest = (props) => {
    const sideBarItems = [
        { id: 1, name: 'Chó', icon: 'fas fa-dog' },
        { id: 2, name: 'Mèo', icon: 'fas fa-cat' },
        { id: 3, name: 'Cá', icon: 'fas fa-fish' },
        { id: 4, name: 'Chim', icon: 'fas fa-dove' },
        { id: 5, name: 'Bò Sát', icon: 'fas fa-spider' },
        { id: 6, name: 'Động vật nhỏ', icon: 'fas fa-otter' },
    ]
    const [activeSidebar, setActiveSidebar] = useState(0)
    const handleClickSidebar = (id) => {
        setActiveSidebar(id)
    }
    const active = 'flex items-center p-2 text-base font-normal text-slate-50 bg-sky-600 rounded-lg hover:bg-sky-800 cursor-pointer'
    const inActive = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer'

    const [arrProducts, setArrProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            let response = await handleGetAllProducts(1)
            setArrProducts(response.products)
        }
        fetchProducts()
    }, [])

    const [products, setProducts] = useState([])

    //console.log(props)
    let userID = (props.isLoggedIn ? props.userInfo.id : 0)
    useEffect(() => {
        const fetchCarts = async () => {
            //if (props.isLoggedIn) {
            let response = await handleGetCart(userID)
            setProducts(response.cart)
            //props.fetchingCart(response)
            //} else {
            //props.fetchingCartFail()
            //}
        }
        fetchCarts()
    }, [])

    const [showCart, setShowCart] = useState(false)
    // let [products, setProducts] = useState([])
    const handleClickCart = () => {
        setShowCart(!showCart)
    }
    const removeItem = async (id) => {
        await handleRemoveCart(id)
    }

    return (
        <div>
            {console.log("re-render")}
            <div className="fixed flex flex-row pt-20 w-full px-20 border-b-2 bg-white z-50">
                <div className="basis-1/4"></div>
                <div className="basis-1/2">
                    <div className="flex justify-center w-full">
                        <div className=" w-full">
                            <div className="relative flex items-stretch w-full mb-4">
                                <input type="search" className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Search">
                                </input>
                                <button
                                    className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4">

                    {
                        (!showCart && (
                            <div className="text-3xl cursor-pointer w-9 h-9 float-right" onClick={() => handleClickCart()}>
                                {/* <i className="fas fa-shopping-cart"></i> */}
                                <Badge badgeContent={products.quantity} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </div>
                        ))
                    }
                    {(showCart && (
                        <div className="pointer-events-auto fixed w-auto max-w-md mt-20 right-2 top-12">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" onClick={() => handleClickCart()} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span>X</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                                                {products &&
                                                    (products.cartItems.map((item) => (
                                                        <li key={item.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center"></img>
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href="#">{item.product_name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{item.price}đ</p>
                                                                    </div>
                                                                    {/* <p className="mt-1 text-sm text-gray-500">Salmon</p> */}
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {item.quantity}</p>

                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            onClick={() => removeItem(item.id)}
                                                                        >Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                    )
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>{products.total_price}đ</p>
                                    </div>
                                    {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                                    <div className="mt-6">
                                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or <button type="button" onClick={() => handleClickCart()} className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <aside className="aside-sticky w-1/6 mt-40 mx-8 shadow-sm">
                <div>
                    <span className="my-3 text-3xl text-gray-600 font-bold">Product Category</span>
                    <div className="px-3 py-4 overflow-y-auto rounded bg-white">
                        <ul className="space-y-2">
                            <li>
                                <div className={activeSidebar === 0 ? active : inActive} onClick={() => handleClickSidebar(0)}>
                                    <div className="ml-10">
                                        <span className="ml-3 whitespace-nowrap">Tất cả sản phẩm</span>
                                    </div>
                                </div>
                            </li>
                            {
                                sideBarItems.map((item) => (
                                    <li key={item.id}>
                                        <div className={item.id === activeSidebar ? active : inActive} onClick={() => handleClickSidebar(item.id)}>
                                            <div className="ml-10">
                                                <i className={item.icon}></i><span className="ml-3 whitespace-nowrap">{item.name}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </aside>
            <div className="w-4/5 float-right py-48 px-4 flex flex-wrap">
                {arrProducts &&
                    arrProducts.map(product => (
                        <div key={product.id} className="w-1/6 p-2 m-5 border rounded">
                            <Link to="" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={product.img} alt={product.name} className="w-full h-full max-h-56 object-center object-cover group-hover:opacity-75"></img>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}VND</p>
                            </Link>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommerceTest)