import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import CreativeMind from "./components/home/creative-mind";
import Subscription from "./components/home/subscription";

export const metadata: Metadata = {
    title: "Slate | Introducing Slate Link – The Minimalist Offline-First Device",
    description: "Experience focus, clarity, and intention. Slate Link is the new minimalist companion device from Slate. Designed for those who value presence over distraction. Join the waitlist for early access.",
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
