import React from 'react';
import SearchMenu from '../searchMenu';
import Player from './../player';
import HeroAndTomorrow from './heroAndTomorrow';


export default function Collection(){
    return(
       <main className='bg-collection-pattern box-border font-Quicksand'>
        <section className='fixed top-0 left-0 z-auto h-full w-full bg-transparent backdrop-blur-md '></section>
       <main className='w-full z-auto bg-gradient-to-b from-black/20 to-black/90 min-h-screen box-border md:pr-6 md:pl-24 pb-32'>
       <SearchMenu /> 
       <section className='flex z-auto flex-col h-fit px-6 md:pl-5 lg:pr-10 gap-10 lg:gap-0'>
          <HeroAndTomorrow />
       </section>
       </main>
       <Player />
   </main>
    )
}