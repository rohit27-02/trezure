/* eslint-disable @next/next/no-img-element */
import Aboutus from '../components/Aboutus';
import Carousel from '../components/Carousel'
import Products from '../components/Products';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import Team from '../components/Team';
import Popup from '../components/popup';

export default function Home() {
  const items = [
    <div key={1} className=" carousel-content">
      <img src='/projects/1.jpg' alt='carousel image'/>
    </div>,
    <div key={2} className=" carousel-content">
      <img src='/projects/2.jpg' alt='carousel image'/>
    </div>,
    <div key={3} className="carousel-content">
      <img src='/projects/3.jpg' alt='carousel image'/>
    </div>,
  ];

  return (
    <div className=''>
      <Popup/>
      <Carousel slides={items} autoPlayInterval={30000} />
      <Services/>
      <Projects/>
      <Products/>
      <Aboutus/>
      <Team/>
      <Showcase  items={items}/>
    </div>
  )
}
