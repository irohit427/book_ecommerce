import React from 'react'
import CarouselCard from '../components/Carousel';
import Section from '../components/Section';
import Newsletter from '../components/Newsletter';
import Feature from '../components/Feature';

const Home = () => {
  return (
    <div>
      <CarouselCard />
      <Section heading='Best Seller'/>
      <Section heading='Most Popular' />
      <Feature />
      <Newsletter />
    </div>
  )
}

export default Home;
