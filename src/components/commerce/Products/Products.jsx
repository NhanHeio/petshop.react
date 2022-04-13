import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div>
            <div className="md:w-4/5 w-full float-right pt-10 px-4 flex flex-wrap">
                {
                    (products.length !== 0)?
                    products.map(product => (
                        <Link
                            to={`/commerce/product/${product.id}`}
                            key={product.id}
                            className="sm:w-1/6 w-5/12 md:p-2 md:m-5 m-2 p-2 border rounded"
                        >
                            <Product product={product} />
                        </Link>
                    )) : <span>Can't find any product like this</span>
                }


            </div>
        </div>
    )
}

export default memo(Products)