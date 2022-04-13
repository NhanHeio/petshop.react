import React, { useState, memo, useRef, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

const Navbar = ({ cart, handleRemoveCartItem, getName }) => {
    const [hideCart, setHideCart] = useState(true)
    const [searchContent, setSearchContent] = useState('')
    const [isListening, setIsListening] = useState(false)
    const typingTimeoutRef = useRef(null)

    const handleClickCart = () => {
        setHideCart(!hideCart)
    }

    const handleSearchTermChange = (e) => {
        setSearchContent(e.target.value)
        let searchValue = e.target.value
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            getName(searchValue)
        }, 500)
    }

    // const handleMicrophone = () => {
    //     setIsListening(!isListening)
    // }

    const handleListening = () => {
        setIsListening(true)
            mic.start()
            mic.onresult = e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                setSearchContent(transcript)
                mic.onerror = e => {
                    console.log(e.error)
                }
                if (e.results[0].isFinal) {
                    getName(transcript)
                    mic.stop()
                    setIsListening(false)
                }
            }
    }

    return (
        <div className="fixed flex flex-row pt-20 w-full px-20 border-b-2 bg-white z-50">
            <div className="md:basis-1/4 basis-0">
            </div>
            <div className="md:basis-1/2 basis-5/6">
                <div className="flex justify-center w-full">
                    <div className=" w-full">
                        <div className="relative flex items-stretch w-full mb-4">
                            <input
                                type="search"
                                className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Search"
                                value={searchContent}
                                onChange={handleSearchTermChange}>
                            </input>
                            <button
                                className="btn px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md"
                                type="button"
                                onClick={() => handleListening()}>
                                {!isListening ?
                                    <i className="fas fa-microphone"></i> :
                                    <i className="fas fa-microphone-slash"></i>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:basis-1/4 basis-1/6">
                {hideCart ?
                    (<div className="text-3xl cursor-pointer w-9 h-9 float-right">
                        {/* <Badge badgeContent={cart.quantity} color="secondary" onClick={() => { handleClickCart() }}>
                            <ShoppingCart />
                        </Badge> */}

                        <Badge badgeContent={cart.quantity} color="secondary" onClick={() => { handleClickCart() }}>
                            <ShoppingCartIcon />
                        </Badge>

                    </div>) :
                    <Cart cart={cart} handleClickCart={handleClickCart} handleRemoveCartItem={handleRemoveCartItem} />

                }
            </div>
        </div>
    )
}

export default memo(Navbar)