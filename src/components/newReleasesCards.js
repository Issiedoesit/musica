import React from 'react';


export default function NewReleasesCards(props){
    return(
        <section key={props.id} className="space-y-2">
            <img src={props.image} loading='lazy' alt="cover" className='h-[153px] min-w-[153px] pointer-events-none'/> 
            <div className='text-white space-y-2 font-Quicksand font-light'>
                <h1>{props.song}</h1>
                <h1 className='text-sm'>{props.artist}</h1>
            </div>
        </section>
    )
}