import Claim from "@/components/Claim";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:px-10 px-4">
      <Hero />
      {/* <section>
        <div className="relative lg:w-1/2 mx-auto">
          <input type="text" placeholder="Search for NFTs, artists, and ..." className="p-4 w-full rounded-full bg-transparent border border-[#CACACA]" />
          <button className="btn p-3 px-10 lg:absolute lg:w-auto w-full sm:mt-2 top-[5px] rounded-full right-[5px]">Search</button>
        </div>
      </section> */}
      {/* <Trending title="Trending in Arts" category='arts' />
      <Trending title="Trending in Photography" category='photography' />
      <Trending title='Trending in Games' category='games' />
      <Trending title='Trending in Membership' category='members' />
      <Trending title='Trending in Music' category='music' /> */}

    </main>
  );
}
