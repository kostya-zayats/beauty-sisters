'use client';
import { Description, Intro, Quote, Services } from '@/components/molecules';
import { Advantages } from '@/components/molecules/advantages';
import { About } from '@/components/molecules/about';
import { Prices } from '@/components/prices';
import { Navigation } from '@/components/molecules/navigation';
import { Title } from './title';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from './useOnScreen';

export default function Massage() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    const [bgColor, setBgColor] = useState('#E9E7E1');

    useEffect(() => {
        setBgColor(isVisible ? '#E9E7E1' : 'black');
    }, [isVisible]);

    return (
        <main className={'main-container'}>
            <Navigation backgroundColor={bgColor} />

            <section className={'main-section'}>
                <div ref={ref}>
                    <Title />
                </div>
            </section>

            <section className={'main-section'}>
                <Intro />
            </section>

            <section className={'main-section'}>
                <Quote />
            </section>

            <section className={'main-section main-about'}>
                <About />
            </section>

            <section className={'main-section'}>
                <Services />
            </section>

            <section className={'main-section'}>
                <Prices />
            </section>

            <section className={'main-section'}>
                <Advantages />
            </section>

            <section className={'main-section'}>
                <Description />
            </section>
        </main>
    );
}
