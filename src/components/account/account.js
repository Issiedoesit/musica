import React from 'react';
import Nav from '../Nav';

export default function Account(){
    return(
        <main className='bg-dark-blue box-border font-Quicksand'>
            <Nav /> 
            <main className='w-full bg-dark-blue min-h-screen box-border px-6 md:pl-24 pb-32'>
            <h1 className='text-3xl font-bold text-white'>Profile</h1>
            </main>
        </main>
    )
}