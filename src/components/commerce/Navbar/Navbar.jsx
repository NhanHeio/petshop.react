import React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = ({cart}) => {
    return (
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
                <div className="text-3xl cursor-pointer w-9 h-9 float-right">
                    {/* <i className="fas fa-shopping-cart"></i> */}
                    <Badge badgeContent={cart.quantity} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Navbar