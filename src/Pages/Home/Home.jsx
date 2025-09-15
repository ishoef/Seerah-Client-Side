import React from "react";
import Hero from "./Hero/Hero";
import States from "./States/States";
import SeerahIntro from "./SeerahIntro/SeerahIntro";
import WebsiteUsage from "./WebsiteUsage/WebsiteUsage";
import HowItWorks from "./HowItWorks/HowItWorks";
import SuccessStories from "./OurJourney/OurJourney";
import OurLearningJourney from "./OurLearningJourney/OurLearningJourney";
import CommunitySupport from "./CommunitySupport/CommunitySupport";
import Footer from "../../Components/Footer/Footer";
import FAQ from "./FAQ/FAQ";

export default function Home() {
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
      <Footer />
      {/* <SuccessStories /> */}
    </section>
  );
}
