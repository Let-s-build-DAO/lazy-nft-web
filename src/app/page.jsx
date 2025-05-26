import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false, // Disable SSR for this component
});

export default function Home() {
  return (
    <main className="lg:px-10 px-4">
      <Hero />
    </main>
  );
}
