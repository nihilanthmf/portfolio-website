"use client";

import CTA from "../websiteparts/Cta";
import Hero from "../websiteparts/Hero";

import Portfolio from "../websiteparts/Portfolio";
import Services from "../websiteparts/Services";

export default function Home({ params }: { params: { lang: string } }) {
  console.log(params.lang);
  return (
    <main className="px-24 bg-background pb-16">
      {/* <Navbar /> */}
      <Hero lang={params.lang} />

      <Services lang={params.lang} />
      <Portfolio lang={params.lang} />
      <CTA lang={params.lang} />
    </main>
  );
}
