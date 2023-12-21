/* eslint-disable @next/next/no-img-element */
import Aboutus from '../components/Aboutus';
import Carousel from '../components/Carousel'
import Products from '../components/Products';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Popup from '../components/popup';
import Video from '../components/Video';
import ContactForm from '../components/ContactForm';
import Ticker from '../components/Ticker';
import Head from 'next/head';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unveil Elegance at Trezure Casa, the luxury furniture store</title>
        <meta name="description" content="Dive into the secrets of Trezure Casa, a luxury furniture store that offers extraordinary pieces reflecting unparalleled quality, and timeless design." />
      </Head>
      <Popup />
      <Carousel />
      <div className='px-4'>
        <h1 className='md:text-[48px] mx-auto max-w-[50rem] text-center mt-20 text-brown-light border p-4 border-brown-light  text-xl tracking-wider  md:leading-[3.5rem] medium'>Elevate Your Space: India&apos;s Premier Luxury Furniture Store</h1>
      </div>
      <Services />
      <Video />
      <Projects />
      <Products />
      <Aboutus />
      <ContactForm />
      <Team />
      <Ticker />
      <Testimonial />
      <Showcase />
    </div>
  )
}
