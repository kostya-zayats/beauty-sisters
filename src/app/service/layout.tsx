'use client';
import { Description, Intro, Quote, Services } from '@/components/molecules';
import { Advantages } from '@/components/molecules/advantages';
import { About } from '@/components/molecules/about';
import { Prices } from '@/components/prices';
import { Navigation } from '@/components/molecules/navigation';

export default function Service({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={'main-container'}>
            <Navigation />

            {children}

            {/* <section className={'main-section'}>
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
            </section> */}
        </main>
    );
}
