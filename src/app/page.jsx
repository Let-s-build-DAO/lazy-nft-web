import dynamic from 'next/dynamic';

const HeaderNav = dynamic(() => import('@/components/HeaderNav'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false, // Disable SSR for this component
});
const Providers = dynamic(() => import('./provider'), { ssr: false })

export default function Home() {
  return (
    <main className="">
      <Providers>
        <HeaderNav />
        <Hero />
      </Providers>
    </main>
  );
}
