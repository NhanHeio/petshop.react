import React,{ useState, memo} from 'react';
import Pagination from '../Pagination/Pagination';
import Product from './Product';

const Products = ({ products }) => {
    const totalPages = 10
    return (
        <div>
            <div className="w-4/5 float-right pt-48 px-4 flex flex-wrap">
                {
                    products.map(product => (
                        <div key={product.id} className="w-1/6 p-2 m-5 border rounded">
                            <Product product={product} />
                        </div>
                    ))
                }
                

            </div>
        </div>
    )
}

export default memo(Products)