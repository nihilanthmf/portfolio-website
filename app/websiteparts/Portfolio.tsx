import imageColdHunt from "../assets/coldhunt.jpeg";
import imageGymBro from "../assets/gymbro.jpeg";
import imageNutry from "../assets/nutry.jpeg";
import imageSummify from "../assets/summify.jpeg";
import imageCyber from "../assets/cyberchat.jpeg";
import imageEAIQ from "../assets/eaiq.jpeg";
import imageInvoflow from "../assets/invoflow.jpeg";
import imageDanielMap from "../assets/map.jpeg";

import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";

import Image from "next/image";

const cards = [
  {
    imageURL: imageDanielMap,
    name: "Community Map",
    stack: "Next.js, Supabase",
    description: "A map to see where community's members are located",
    href: "https://daniel-community-map.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageColdHunt,
    name: "ColdHunt",
    stack: "Next.js, Supabase, Node.js, Express, Chrome Extensions APIs",
    description: "Scrapes Instagram and sends AI cold DMs",
    href: "https://cold-hunt.com",
    mobile: false,
  },
  {
    imageURL: imageCyber,
    name: "CyberChat",
    stack: "React, Node.js, Express, Supabase, OpenAI, HTML, CSS",
    description: "AI customer support chatbot",
    href: "https://cyberchatai.vercel.app?la=en",
    mobile: false,
  },
  // {
  //   imageURL: imageInvoflow,
  //   name: "Invoflow",
  //   stack: "Next.js, Supabase",
  //   description: "Invoicing software",
  //   href: "https://invoflow.vercel.app/",
  //   mobile: false,
  // },
  // {
  //   imageURL: imageEAIQ,
  //   name: "evoAIq",
  //   stack: "Next.js",
  //   description: "Landing page for AI automation agency",
  //   href: "https://aideal.online",
  //   mobile: false,
  // },
];

const cardsRu = [
  {
    imageURL: imageDanielMap,
    name: "Community Map",
    stack: "Next.js, Supabase",
    description:
      "Карта для сообщества, чтобы его члены могли отмечать где находятся",
    href: "https://daniel-community-map.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageColdHunt,
    name: "ColdHunt",
    stack: "Next.js, Supabase, Node.js, Express, Chrome Extensions APIs",
    description:
      "Автоматизиция холодной рассылки для Twitter и Instagram с помощью ИИ",
    href: "https://cold-hunt.com",
    mobile: false,
  },
  {
    imageURL: imageCyber,
    name: "CyberChat",
    stack: "React, Node.js, Express, Supabase, OpenAI, HTML, CSS",
    description: "Чат-бот поддержки клиентов с ИИ",
    href: "https://cyberchatai.vercel.app?la=en",
    mobile: false,
  },
  // {
  //   imageURL: imageEAIQ,
  //   name: "evoAIq",
  //   stack: "Next.js",
  //   description: "Сайт компании по разработке ИИ продуктов",
  //   href: "https://eaiq.io",
  //   mobile: false,
  // },
];

const mobile = [
  {
    imageURL: imageSummify,
    name: "Summify",
    stack: "placeholder",
    description:
      "Mobile app that records a speech & creates brief summaries with AI",
    href: "/",
    mobile: true,
  },

  {
    imageURL: imageGymBro,
    name: "GymBro",
    stack: "placeholder",
    description:
      "Mobile dating app (for finding a training partner, Tinder clone)",
    href: "/",
    mobile: true,
  },
];

const mobileRu = [
  {
    imageURL: imageSummify,
    name: "Summify",
    stack: "placeholder",
    description:
      "Приложение, которое записывает речь и создает краткие содержания с помощью ИИ",
    href: "/",
    mobile: true,
  },
  // {
  //   imageURL: imageNutry,
  //   name: "Nutry",
  //   stack: "placeholder",
  //   description: "Счетчик калорий с элементами геймификации",
  //   href: "/",
  //   mobile: true,
  // },
  {
    imageURL: imageGymBro,
    name: "GymBro",
    stack: "placeholder",
    description: "Приложения для знакомств/поиска партнера для тренировок",
    href: "/",
    mobile: true,
  },
];

export default function Portfolio({ lang }: { lang: string }) {
  return (
    <section id="portfolio">
      <BentoGrid className="grid grid-cols-1 md:grid-cols-2">
        {lang === "ru"
          ? cardsRu.map((feature, idx) => (
              <BentoCard
                key={idx}
                {...feature}
                className=""
                href={feature.href === undefined ? "/" : feature.href}
                cta="open"
                background={
                  <Image
                    alt={feature.name}
                    src={feature.imageURL}
                    width={1000}
                    height={1000}
                  />
                }
              />
            ))
          : cards.map((feature, idx) => (
              <BentoCard
                key={idx}
                {...feature}
                className=""
                cta="open"
                background={
                  <Image
                    alt={feature.name}
                    src={feature.imageURL}
                    width={1000}
                    height={1000}
                  />
                }
              />
            ))}
        <BentoGrid className="grid grid-cols-1 md:grid-cols-2">
          {lang === "ru"
            ? mobileRu.map((feature, idx) => (
                <BentoCard
                  key={idx}
                  {...feature}
                  className=""
                  href={feature.href === undefined ? "/" : feature.href}
                  cta=""
                  background={
                    <Image
                      alt={feature.name}
                      src={feature.imageURL}
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  }
                />
              ))
            : mobile.map((feature, idx) => (
                <BentoCard
                  key={idx}
                  {...feature}
                  className=""
                  href={feature.href === undefined ? "/" : feature.href}
                  cta=""
                  background={
                    <Image
                      alt={feature.name}
                      src={feature.imageURL}
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  }
                />
              ))}
        </BentoGrid>
      </BentoGrid>
    </section>
  );
}
