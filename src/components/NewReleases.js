import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion'
import NewReleasesCards from './newReleasesCards';
import NewReleasesData from './newReleasesData';

export default function NewReleases(){
    const cardVariants: Variants = {
        offscreen: {
          y: 150,
          opacity:0,
        },
        onscreen: {
          y: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration:2
          }
        }
      };
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
        <motion.main initial="offscreen" variants={cardVariants} whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} transition={{ ease: "easeOut", duration: 2 }} className="py-16 px-6 space-y-10 md:pl-10">
            <h1 className='text-white font-bold text-2xl'>New releases.</h1>
            <motion.div  ref={carousel}  whileTap={{cursor: 'grabbing' }} className="carousel cursor-grab overflow-hidden">
                <motion.div drag="x" dragConstraints={{ right:0, left:-width }} className='inner-carousel h-full w-full flex flex-row gap-10'>
                    {NewReleasesDataset}
                </motion.div>
            </motion.div>
        </motion.main>
    )
}
