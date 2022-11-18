import React from 'react';
import SearchMenu from '../searchMenu';
import MultiPlayer from './MultiPlayer';
// import SeeTheLight from './../../assets/music/SeeTheLight-StephenSanchez.mp3'


export default function Radio(){
    return(
        <main className='bg-dark-blue box-border font-Quicksand'>
            <main className='w-full bg-dark-blue min-h-screen box-border px-6 md:pl-24 pb-32'>
            <SearchMenu /> 
            <h1 className='text-3xl font-bold text-white'>Radio</h1>
                <audio id='playing_song' src='./../assets/music/SeeTheLight-StephenSanchez.mp3' controls type='audio/mp3'></audio>
                <MultiPlayer
                    urls={[
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                    ]}
                />
            </main>
        </main>
    )
}