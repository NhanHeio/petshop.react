import React, { useState } from 'react'

const PersonalNav = ({getActiveIndex}) => {
    const Nav = [
        { id: 1, name: 'My account'},
        { id: 2, name: 'Change password'},
        { id: 3, name: 'Booking History'},
        { id: 4, name: 'Order History'},
    ]
    const [activeSidebar, setActiveSidebar] = useState(1)
    const handleClickSidebar = (id) => {
        setActiveSidebar(id)
        getActiveIndex(id)
    }
    const active = 'flex items-center p-2 text-base font-normal text-slate-50 bg-sky-600 rounded-lg hover:bg-sky-800 cursor-pointer'
    const inActive = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer'
  return (
    <div>
            <aside className="w-5/12 md:mx-60 shadow-sm">
                <div>
                    <div className="px-3 py-4 overflow-y-auto rounded">
                        <ul className="space-y-2">
                            {
                                Nav.map((item) => (
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
        </div >
  )
}

export default PersonalNav