import React from "react";
import Hero from "./Hero/Hero";
import States from "./States/States";
import SeerahIntro from "./SeerahIntro/SeerahIntro";
import WebsiteUsage from "./WebsiteUsage/WebsiteUsage";

export default function Home() {
  return (
    <section>
      <Hero />
      <States />
      <WebsiteUsage />
      <SeerahIntro />
    </section>
  );
}
