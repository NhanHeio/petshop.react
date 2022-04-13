import React, { useState, memo } from 'react';

const SideBar = ({filterProducts}) => {
    const sideBarItems = [
        { id: 4, name: 'Chó', icon: 'text-xl fas fa-dog' },
        { id: 14, name: 'Mèo', icon: 'text-xl fas fa-cat' },
        { id: 24, name: 'Cá', icon: 'text-xl fas fa-fish' },
        { id: 34, name: 'Chim', icon: 'text-xl fas fa-dove' },
        { id: 44, name: 'Bò Sát', icon: 'text-xl fas fa-spider' },
        { id: 54, name: 'Động vật nhỏ', icon: 'text-xl fas fa-otter' },
    ]
    const [activeSidebar, setActiveSidebar] = useState(0)
    const handleClickSidebar = (id) => {
        setActiveSidebar(id)
        filterProducts(id)
    }
    const active = 'flex items-center p-2 text-base font-normal text-slate-50 bg-sky-600 rounded-lg hover:bg-sky-800 cursor-pointer'
    const inActive = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer'
    return (
        <div>
            <aside className="md:block hidden fixed top-5 bottom-14 left-0 z-[999] py-0 w-1/6 mt-56 mx-8 shadow-sm">
                <div>
                    <span className="my-3 text-3xl text-gray-600 font-bold">Product Category</span>
                    <div className="px-3 py-4 overflow-y-auto rounded bg-white">
                        <ul className="space-y-2">
                            <li>
                                <div className={activeSidebar === 0 ? active : inActive} onClick={() => handleClickSidebar(0)}>
                                    <div className="ml-10">
                                        <span className="ml-3 text-xl whitespace-nowrap">Tất cả sản phẩm</span>
                                    </div>
                                </div>
                            </li>
                            {
                                sideBarItems.map((item) => (
                                    <li key={item.id}>
                                        <div className={item.id === activeSidebar ? active : inActive} onClick={() => handleClickSidebar(item.id)}>
                                            <div className="ml-10">
                                                <i className={item.icon}></i><span className="ml-3 text-xl whitespace-nowrap">{item.name}</span>
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

export default memo(SideBar)