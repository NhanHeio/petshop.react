import React, { useState } from 'react'

const Pagination = ({ getPage, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const handleChangePage = (page) => {
        setCurrentPage(page)
        getPage(page)
    }
    const listPage = []
    for (let i = 1; i <= totalPages; i++) {
        listPage.push({ id: i })
    }
    console.log(listPage)
    const classActive = "mx-4 py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 cursor-pointer"
    const classInactive = "mx-4 py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
    return (
        <div className="w-4/5 float-right my-20">
            <ul className="inline-flex ">
                {
                    listPage.map((item) => (
                        // console.log(item)
                        <li key={item.id}>
                            <span
                                className={(currentPage === item.id) ? classActive : classInactive}
                                onClick={() => { handleChangePage(item.id) }}
                            >{item.id}</span>
                        </li>
                    ))
                }

            </ul>
        </div>


    )
}

export default Pagination