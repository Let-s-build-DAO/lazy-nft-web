'use client'

import Trending from '@/components/Trending';
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

const Marketplace = () => {
  const [active, setActive] = useState("all")
  useEffect(() => {
    // Ensure jQuery is available globally
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = $;
    }
  }, []);
  return (
    <div>
      <section className='my-16'>
        <OwlCarousel responsive={
          {
            0: {
              items: 1,
              rtl: true,
              loop: true,
              autoplay: true,
              autoplaySpeed: 2000,
              stagePadding: 70,
              autoplayTimeout: 2000,
              margin: 20,
            },
            1000: {
              items: 4,
              rtl: true,
              loop: true,
              margin: 20,
              autoplay: true,
              autoplaySpeed: 1000,
              stagePadding: 50,
              autoplayTimeout: 2000,
            }
          }
        }>
          <div>
            <img src="/images/nft-5.png" alt="" />
          </div>
          <div>
            <img src="/images/nft-4.png" alt="" />
          </div>
          <div>
            <img src="/images/nft-2.png" alt="" />
          </div>
          <div>
            <img src="/images/nft-3.png" alt="" />
          </div>
        </OwlCarousel>
      </section>
      <section className='lg:px-10 px-4'>
        <div className='lg:flex hidden justify-between lg:w-[70%] mx-auto'>
          <button onClick={() => setActive('all')} className={active === 'all' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>All</button>
          <button onClick={() => setActive('art')} className={active === 'art' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>Art</button>
          <button onClick={() => setActive('game')} className={active === 'game' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>Game</button>
          <button onClick={() => setActive('photography')} className={active === 'photography' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>Photography</button>
          <button onClick={() => setActive('music')} className={active === 'music' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>Music</button>
          <button onClick={() => setActive('membership')} className={active === 'membership' ? 'btn p-3 px-8 rounded-md' : 'border-2 border-[#515151] p-3 px-8 rounded-md'}>Membership</button>
        </div>
        <Trending title='Trending in Arts' category='' />
      </section>
    </div>
  );
};

export default Marketplace;