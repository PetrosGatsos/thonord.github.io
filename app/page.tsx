'use client';
import Hero from "../components/Hero";
import FloatingNav from "../components/ui/FloatingNav";
import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Dynamically import the Grid component with SSR disabled
const Grid = dynamic(() => import('../components/Grid'), { ssr: false });

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the code is running in the client environment
    if (typeof document !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  // Render the component only after client-side rendering has occurred
  if (!isClient) return null;

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full" >
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
