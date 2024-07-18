import Link from 'next/link';
import React from 'react';
import Card from './Card';

const Trending = ({ title, category }) => {
  return (
    <section className='my-10'>
      <div className='flex justify-between mt-6 lg:mb-12 mb-6'>
        <h1 className='lg:text-3xl text-xl font-bold'>{title}</h1>
        {category === '' ? null : <Link className='my-auto' href={`/marketplace?category=${category}`}>
          <button className='lg:text-xs text-sm flex '><span className='my-auto mr-3'>See more</span> <img className='my-auto  w-4' src="/images/arrow-right.svg" alt="" /></button>
        </Link>}
      </div>
      <div className='lg:flex justify-between'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Trending;