// import HomeComp from '@/components/HomeComp';
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';
import HomeComp from '@/components/HomeComp';
// const HomeComp = dynamic(() => import('@/components/HomeComp'), {
//   ssr: false,
//   loading: () => <Loader />,
// });

const Home = () => {
  return (
    <HomeComp />
  );
};

export default Home;