import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import NewReleasesCards from './newReleasesCards';
import NewReleasesData from './newReleasesData';

export default function NewReleases(){
    const NewReleasesDataset = NewReleasesData.map((newRelease)=>{
        return (
            <NewReleasesCards key={newRelease.id} image={newRelease.image} song={newRelease.song} artist={newRelease.artist} />
        )
    })
    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return(
        <main className="py-16 space-y-10 pl-10">
            <h1 className='text-white font-bold text-2xl'>New releases.</h1>
            <motion.div  ref={carousel} whileTap={{cursor: 'grabbing' }} className="carousel cursor-grab overflow-hidden">
                <motion.div drag="x" dragConstraints={{ right:0, left:-width }} className='inner-carousel h-full w-full flex flex-row gap-10'>
                    {NewReleasesDataset}
                </motion.div>
            </motion.div>
        </main>
    )
}
