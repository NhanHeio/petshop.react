import React, { memo, useState } from 'react'
const sideBarItems = [
    { id: 1, name: 'Overview' },
    { id: 2, name: 'Orders' },
    { id: 3, name: 'Bookings' },
    { id: 4, name: 'Products' },
    { id: 5, name: 'Users' },
]

const active = 'flex items-center p-2 text-base font-normal text-slate-50 bg-sky-600 rounded-lg hover:bg-sky-800 cursor-pointer'
const inActive = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer'
const SideBar = ({getDashboard}) => {
    const [activeSidebar, setActiveSidebar] = useState(1)
    const handleClickSidebar = (id) => {
        setActiveSidebar(id)
        getDashboard(id)
    }
    return (
        <aside className="w-1/6 pt-24 py-0 h-full min-h-screen shadow-md bg-white">
            <div>
                <div className="px-3 py-4 overflow-y-auto rounded bg-white">
                    <ul className="space-y-2">
                        {
                            sideBarItems.map((item) => (
                                <li key={item.id}>
                                    <div className={item.id === activeSidebar ? active : inActive} onClick={() => handleClickSidebar(item.id)}>
                                        <div className="ml-10">
                                            <span className="ml-3 whitespace-nowrap">{item.name}</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        <li>
                            <a href="/">
                                <div className={inActive}>
                                    <div className="ml-10">
                                        <span className="ml-3 whitespace-nowrap">PetShop</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default memo(SideBar)