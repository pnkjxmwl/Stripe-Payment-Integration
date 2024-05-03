import React, { useState } from 'react'
import { items } from '../constant/index.js'
const Home = () => {

    onsubmit = async () => {
        var but = document.getElementById("but");
        var spin = document.getElementById("but");
        but.style.display="hidden";
        spin.style.display="block";
       
        let stripeurl = 'http://localhost:3000/checkout'
        const response = await fetch(stripeurl, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ items }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json();
        const urltovisit = myJson.url;
        window.location = urltovisit
    }
    return (
        <div className="container mx-auto mt-10 lg:mt-20">

            <div className='flex flex-col flex-wrap mx-20 items-center px-2 py-1'>

                <h2
                    className='font-bold  text-4xl sm:text-5xl lg:text-6xl uppercase text-neutral-600'
                >List of Items</h2>
                <div className='flex w-full flex-col mt-10 sm:mt-20 lg:mt-30 items-center'>
                    {

                        items.map((item, index) => (

                            <div key={index} className='flex space-x-3 justify-between px-5 py-3 mx-2 my-4 bg-neutral-400 rounded-md' >

                                <h2
                                    className='text-2xl white'
                                >{item.name}</h2>
                                <p
                                    className='text-neutral-300 text-xl'
                                > {item.price}</p>

                            </div>

                        ))
                    }
                    <div className='bg-neutral-200 rounded-lg px-2 py-3 text-4xl mt-3 sm:mt-4 lg:mt-6'>

                        <button
                        id='but'
                        onClick={onsubmit}
                        >Checkout</button>

                    <div role="status" id='spin' className='hidden'>
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </div>
            </div>


        </div>


        </div >
    )
}

export default Home