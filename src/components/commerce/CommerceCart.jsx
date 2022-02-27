import React, { useState } from 'react';

const CommerceCart = () => {
    const [showCart, setShowCart] = useState(false)
    const handleClickCart = () =>{
        setShowCart(!showCart)
    }

    return (
        <div>
            {/* Cart logo */}
            {
                !showCart && (
                    <div className="text-3xl fixed right-10 md:top-28 bottom-40 cursor-pointer" onClick={() => handleClickCart()}>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                )
            }

            {/* Cart side */}

            {
                showCart && (
                    <div className="pointer-events-auto fixed w-screen max-w-md mt-32 right-2 top-12">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button"  onClick={() => handleClickCart()} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span>X</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"></img>
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#"> Throwback Hip Bag </a>
                                                            </h3>
                                                            <p className="ml-4">$90.00</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty 1</p>

                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center"></img>
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#"> Medium Stuff Satchel </a>
                                                            </h3>
                                                            <p className="ml-4">$32.00</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">Blue</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty 1</p>

                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
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
                )
            }

        </div>
    )
}

export default CommerceCart