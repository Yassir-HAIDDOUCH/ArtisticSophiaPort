import React, { useState } from 'react';
import Carousel from '../utils/carousel.jsx';

function home() {

    const [images, setImages] = useState([
        'https://i.ibb.co/YLjyBV6/AR-31-6978-01.jpg',
        'https://i.ibb.co/N3HbHbg/AR-31-8122.jpg',
        'https://i.ibb.co/ZxV390J/0-2.gif',
        'https://i.ibb.co/s13qN8x/AR-31-5156-colored.jpg',
        'https://i.ibb.co/5MkgCY8/AR-31-5495-4.jpg'
    ]);

    return (
        <>
            <div className="bg-home flex bg-center bg-cover">
                <div className='container flex justify-center items-center h-screen md:grid md:grid-cols-2  gap-8  '>
                    <div className=''>
                        <div className='bg-primary/50 py-12 px-8 rounded-lg'>
                            <Carousel images={images} ></Carousel>
                        </div>

                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='space-y-3 w-10/12'>
                            <p className='text-5xl font-bold text-white' >Welcome</p>
                            <p className='text-5xl font-bold text-secondary' >I'm Artistic Sophia</p>
                            <p className='text-xl text-white font-bold'>I'm a passionate digital artist, spending my days (and often nights) bringing imagination to life on a digital canvas. With every stroke and shade, I transform pixels into immersive, expressive worlds.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default home;