import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div>
            <div className="md:w-4/5 w-full float-right pt-48 px-4 flex flex-wrap">
                {
                    products.map(product => (
                        <Link
                            to={`/commerce/product/${product.id}`}
                            key={product.id}
                            className="md:w-1/6 w-5/12 md:p-2 md:m-5 m-2 p-2 border rounded"
                        >
                            <Product product={product} />
                        </Link>
                    ))
                }


            </div>
        </div>
    )
}

export default memo(Products)