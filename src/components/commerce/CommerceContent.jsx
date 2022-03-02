import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleGetAllProducts } from '../../services/productService';

const CommerceContent = () => {
    const [arrProducts, setArrProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            let response = await handleGetAllProducts(1)
            setArrProducts(response.products)
        }
        fetchProducts()
    }, [])
    return (
        <div>
            <div className="w-4/5 float-right py-48 px-4 flex flex-wrap">
                { arrProducts &&
                    arrProducts.map(product => (
                        <div key={product.id} className="w-1/6 p-2 m-5 border rounded">
                            <Link to="" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={product.img} alt={product.name} className="w-full h-full max-h-56 object-center object-cover group-hover:opacity-75"></img>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}VND</p>
                            </Link>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default CommerceContent