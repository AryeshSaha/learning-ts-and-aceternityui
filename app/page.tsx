import Grid from "@/components/grid";
import Hero from "@/components/hero";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import navItems from "@/data/navItems";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <HoverEffect items={projects} /> */}
      </div>
    </main>
  );
}