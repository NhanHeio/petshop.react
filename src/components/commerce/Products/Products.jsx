import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div>
            <div className="w-4/5 float-right pt-48 px-4 flex flex-wrap">
                {
                    products.map(product => (
                        <Link
                            to={`/commerce/product/${product.id}`}
                            key={product.id}
                            className="w-1/6 p-2 m-5 border rounded"
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