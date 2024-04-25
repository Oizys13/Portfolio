import Hero from "@/components/main/Hero";
import Skils from "@/components/main/Skils";
import Image from "next/image";


export default function Home() {
  return (
<main className="h-full w-full">
    <div className="flex flex-col gap-2">
      <Hero/>
      <Skils/>
    </div>
</main>
  );
}
