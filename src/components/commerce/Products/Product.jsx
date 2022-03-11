import React, {memo} from 'react';

const Product = ({product}) => {
    return (
        <div>
            <div className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={product.img} alt={product.name} className="w-full h-full max-h-56 object-center object-cover group-hover:opacity-75"></img>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}VND</p>
            </div>
        </div>
    )
}

export default memo(Product)