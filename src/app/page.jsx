// import HomeComp from '@/components/HomeComp';
import React from 'react';
import dynamic from 'next/dynamic';
const HomeComp = dynamic(() => import('@/components/HomeComp'), { ssr: false });

const Home = () => {
  return (
    <HomeComp />
  );
};

export default Home;