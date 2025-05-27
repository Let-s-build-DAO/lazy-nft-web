'use client';

import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import HomeComp from '@/components/HomeComp';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for effect (optional)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // You can adjust or remove delay

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <HomeComp />;
};

export default Home;
