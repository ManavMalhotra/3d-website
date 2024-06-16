import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />

    </main>
  );
}
