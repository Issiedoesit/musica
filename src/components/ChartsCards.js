import React from 'react';
import Heart_orange from './../assets/icons/iconly/Heart-orange.svg'



export default function ChartsCards(props){
    return(
        <section className='flex flex-col md:flex-row gap-4 p-4 rounded-[20px] min-w-[250px] w-full bg-dark-blue-alt md:items-center relative md:static'>
        <img src={props.image} alt="chart cover" className='h-[60px] w-[60px]'/>
            <div className='text-white md:pl-4  w-10/12 space-y-1'>
                <h2>{props.name}</h2>
                <p className='text-xs'>{props.composer}</p>
                <p className='text-xs'>{props.duration}</p>
            </div>
            <div className='p-3 rounded-[50%] cursor-pointer justify-self-end absolute top-4 right-4 md:static  border border-white/10'>
                <img src={Heart_orange} alt="like" />
            </div>
    </section>
    )
}