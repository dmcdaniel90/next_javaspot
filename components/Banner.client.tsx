'use client'
import React from 'react'
import Image from 'next/image'

export default function Banner() {
    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className='mb-12 grid lg:mb-24 lg:grid-cols-2'>
            <div className='z-20 flex flex-col px-2 md:pt-12'>
                <h1 className='my-2 flex-wrap'>
                    <span className='pr-2 text-coffee-200'>Java</span>
                    <span className='text-coffee-400'>Spot</span>
                </h1>
                <p className="text-xl font-semibold text-coffee-200 md:mt-5 lg:text-2xl">Discover local coffee spots near you</p>
                <div className='mt-12'>
                    <button onClick={handleClick}>View stores nearby</button>
                </div>
            </div>
        </div>
    )
}
