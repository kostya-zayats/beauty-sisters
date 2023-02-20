import { Inter } from '@next/font/google';
import { Description, Intro, Navigation, Quote, Services } from '@/components/molecules';
import { Advantages } from '@/components/molecules/advantages';
import { About } from '@/components/molecules/about';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={'main-container'}>
      <Navigation />

      <section className={'main-section'}>
        <Intro />
      </section>

      <section className={'main-section'}>
        <Quote />
      </section>

      <section className={'main-section'}>
        <About />
      </section>

      <section className={'main-section'}>
        <Services />
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
