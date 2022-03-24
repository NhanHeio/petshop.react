import React, { useState } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LineChart from '../../chart/LineChart';
import PieChart from '../../chart/PieChart';

const activeClass = 'mx-3 w-fit px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg bg-blue-700 shadow-lg outline-none ring-0 transition duration-150 ease-in-out'
const inActiveClass = 'mx-3 w-fit px-6 py-2.5 bg-slate-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out'

const DashboardHome = () => {
    const [active, setActive] = useState(1);
    const handleClickQuarter = () => {
        setActive(1)
    }
    const handleClickYear = () => {
        setActive(2)
    }
    return (
        <div className="pt-32 w-5/6 h-screen px-20">
            <div className="flex-flex-col h-full">
                <div className="h-fit w-full flex flex-row">
                    <div className="px-4 mb-10 w-1/3">
                        <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                            <div className="flex flex-wrap border-b border-gray-200">
                                <div className="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink">
                                    <GroupsIcon />
                                </div>
                                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Users</h5>
                                    <span className="text-3xl text-gray-900">300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-10 w-1/3">
                        <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                            <div className="flex flex-wrap border-b border-gray-200">
                                <div className="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange">
                                    <ShoppingCartIcon />
                                </div>
                                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Orders</h5>
                                    <span className="text-3xl text-gray-900">10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-10 w-1/3">
                        <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                            <div className="flex flex-wrap border-b border-gray-200">
                                <div className="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue">
                                    <CheckBoxIcon />
                                </div>
                                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Bookings</h5>
                                    <span className="text-3xl text-gray-900">10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-fit w-full flex flex-row">
                    <div className="w-2/3">
                        <div className="w-fit flex flex-row">
                            <button
                                className={(active === 1) ? activeClass : inActiveClass}
                                onClick={() => {handleClickQuarter()}}
                            >
                                Quarter View
                            </button>
                            <button
                                className={(active === 2) ? activeClass : inActiveClass}
                                 onClick={() => {handleClickYear()}}
                            >
                                Year View
                            </button>
                        </div>
                        <LineChart />
                    </div>
                    <div className="w-1/3">
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome