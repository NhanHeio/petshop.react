import React, { useState } from 'react'
const sideBarItems = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Orders' },
    { id: 3, name: 'Products' },
    { id: 4, name: 'Customers' },
    { id: 5, name: 'Analytics' },
]
const style = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    height: 'full',
    zIndex: 999,
    paddingTop: 0,
    paddingBottom: 0
}
const active = 'flex items-center p-2 text-base font-normal text-slate-50 bg-sky-600 rounded-lg hover:bg-sky-800 cursor-pointer'
const inActive = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer'
const SideBar = () => {
    const [activeSidebar, setActiveSidebar] = useState(1)
    const handleClickSidebar = (id) => {
        setActiveSidebar(id)
    }
    return (
        <div>
            <aside style={style} className=" w-1/6 mt-24 shadow-md bg-white">
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
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default SideBar