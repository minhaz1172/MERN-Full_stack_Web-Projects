import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/offer';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

function Shop() {
  return (
    <div className="shop">
      { /* Hero Section */}
      <section className="hero-section mb-5">
        <Hero />
      </section>

      {/* Popular Section */}
      <section className="popular-section container">
        <Popular />
      </section>

      {/*offer section */}
      <section className='offer-section container'>
        <Offer />
      </section>

      {/*new collection section */}
      <section className='New-collection container'>
        <NewCollection />
      </section>
      {/*news letter section */}
      <section className='newsletter container'>
        <Newsletter />
      </section>

{/*footer section */}
<section className='footer container'>
      <Footer/>
      </section>
    </div>
  );
}

export default Shop;
