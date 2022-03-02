import React from 'react';
import CommerceCart from './CommerceCart';
import CommerceSearch from './CommerceSearch';

const CommerceHeader = () => {
    return (
        <div className="fixed flex flex-row pt-20 w-full px-20 border-b-2 bg-white z-50">
            <div className="basis-1/4"></div>
            <div className="basis-1/2">
                <CommerceSearch />
            </div>
            <div className="basis-1/4">
                <CommerceCart />
            </div>
        </div>
    )
}

export default CommerceHeader