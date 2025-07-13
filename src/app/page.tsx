import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import CreativeMind from "./components/home/creative-mind";
import Subscription from "./components/home/subscription";

export const metadata: Metadata = {
    title: "Slate Link - A Minimalist Offline-First Companion Device",
    description: "Slate Link is a minimalist offline-first companion device built to help you think, focus, and live better. A tiny emotional computer built to be quietly powerful.",
};

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Features section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Features section Ends-----------------  */}

      {/* ---------------------About Slate section Starts-----------------  */}
      <CreativeMind />
      {/* ---------------------About Slate section Ends-----------------  */}

      {/* ---------------------Waitlist section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Waitlist section Ends-----------------  */}

      {/* ---------------------FAQ section Starts-----------------  */}
      <Faq />
      {/* ---------------------FAQ section Ends-----------------  */}
    </main>
  )
}
