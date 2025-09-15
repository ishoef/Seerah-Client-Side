import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import States from "./States/States";
import SeerahIntro from "./SeerahIntro/SeerahIntro";
import WebsiteUsage from "./WebsiteUsage/WebsiteUsage";
import HowItWorks from "./HowItWorks/HowItWorks";
import SuccessStories from "./OurJourney/OurJourney";
import OurLearningJourney from "./OurLearningJourney/OurLearningJourney";
import CommunitySupport from "./CommunitySupport/CommunitySupport";
import FAQ from "./FAQ/FAQ";
import { useLocation } from "react-router";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <section>
      <Hero />
      <States />
      <WebsiteUsage />
      <OurLearningJourney />
      <CommunitySupport />
      <HowItWorks />
      <SeerahIntro />
      <FAQ />
      {/* <SuccessStories /> */}
    </section>
  );
}
