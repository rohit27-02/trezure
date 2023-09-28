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

export default function Home() {
  return (
    <div className=''>
      <Popup />
      <Carousel />
      <Services />
      <Video />
      <Projects />
      <Products />
      <Aboutus />
      <ContactForm />
      <Team />
      <Ticker />
      <Testimonial />
      <Showcase/>
    </div>
  )
}
