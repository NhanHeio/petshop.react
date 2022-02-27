import React, { useState } from 'react';
import './commerceSidebar.scss'

const CommerceSideBar = () => {
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
    return (
        <div>
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
        </div >
    )
}

export default CommerceSideBar