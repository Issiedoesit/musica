import React from 'react';
import Chart from './charts';
import Player from './player';
import NewReleases from './NewReleases';
import CuratedPlaylist from './curatedPlaylist';
import SearchMenu from './searchMenu';


export default function Home(){
    return(
        <main className='bg-dark-blue box-border font-Quicksand'>
            <main className='w-full bg-dark-blue min-h-screen box-border px-6 md:pl-24 pb-32'>
            <SearchMenu /> 
            <section className='flex flex-col lg:flex-row h-fit pl-5 lg:pr-10 gap-10 lg:gap-0'>
                <CuratedPlaylist />
                <Chart />
            </section>
            <NewReleases />
            </main>
            <Player />
        </main>
    )
}