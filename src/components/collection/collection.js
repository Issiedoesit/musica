import React from 'react';
import SearchMenu from '../searchMenu';


export default function Collection(){
    return(
        <main className='bg-dark-blue box-border font-Quicksand'>
            <main className='w-full bg-dark-blue min-h-screen box-border px-6 md:pl-24 pb-32'>
            <SearchMenu /> 
            <h1 className='font-3xl font-bold text-white'>Collections</h1>
            </main>
        </main>
    )
}