import React from 'react';
import Hero from './hero';
import Tomorrow from './tomorrow';

export default function HeroAndTomorrow(){
    return(
        <section className="h-full px-6 pb-32 z-40">
            <Hero />
            <Tomorrow />
        </section>
    )
}