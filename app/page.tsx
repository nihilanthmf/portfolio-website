"use client";

import CTA from "./websiteparts/Cta";
import Hero from "./websiteparts/Hero";

import Portfolio from "./websiteparts/Portfolio";
import Services from "./websiteparts/Services";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <main className="px-8 md:px-24 bg-background pb-16">
      {/* <Navbar /> */}
      <Hero lang={params.lang ?? "en"} />

      <Services lang={params.lang ?? "en"} />
      <Portfolio lang={params.lang ?? "en"} />
      <CTA lang={params.lang ?? "en"} />
    </main>
  );
}
