import imageColdHunt from "../assets/coldhunt.jpeg";
import imageGymBro from "../assets/gymbro.jpeg";
import imageNutry from "../assets/nutry.jpeg";
import imageSummify from "../assets/summify.jpeg";
import imageCyber from "../assets/cyberchat.jpeg";
import imageEAIQ from "../assets/eaiq.jpeg";
import imageDanielMap from "../assets/map.jpeg";

import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";

import Image from "next/image";

const cards = [
  {
    imageURL: imageDanielMap,
    name: "Community Map",
    description: "A map to see where community's members are located",

    href: "https://daniel-community-map.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageColdHunt,
    name: "ColdHunt",
    description: "Scrapes Instagram and sends AI cold DMs",

    href: "https://cold-hunt.com",
    mobile: false,
  },
  {
    imageURL: imageCyber,
    name: "CyberChat",

    description: "AI customer support chatbot",
    href: "https://cyberchatai.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageEAIQ,
    name: "evoAIq",

    description: "Website for an AI automation agency",
    href: "https://eaiq.io",
    mobile: false,
  },
];

const cardsRu = [
  {
    imageURL: imageDanielMap,
    name: "Community Map",
    description:
      "Карта для сообщества, чтобы его члены могли отмечать где находятся",

    href: "https://daniel-community-map.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageColdHunt,
    name: "ColdHunt",
    description:
      "Автоматизиция холодной рассылки для Twitter и Instagram с помощью ИИ",

    href: "https://cold-hunt.com",
    mobile: false,
  },
  {
    imageURL: imageCyber,
    name: "CyberChat",

    description: "Чат-бот поддержки клиентов с ИИ",
    href: "https://cyberchatai.vercel.app",
    mobile: false,
  },
  {
    imageURL: imageEAIQ,
    name: "evoAIq",

    description: "Сайт компании по разработке ИИ продуктов",
    href: "https://eaiq.io",
    mobile: false,
  },
];

const mobile = [
  {
    imageURL: imageSummify,
    name: "Summify",

    description:
      "Mobile app that records a speech & creates brief summaries with AI",
    href: "/",
    mobile: true,
  },

  {
    imageURL: imageGymBro,
    name: "GymBro",

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

    description:
      "Приложение, которое записывает речь и создает краткие содержания с помощью ИИ",
    href: "/",
    mobile: true,
  },
  {
    imageURL: imageNutry,
    name: "Nutry",

    description: "Счетчик калорий с элементами геймификации",
    href: "/",
    mobile: true,
  },
  {
    imageURL: imageGymBro,
    name: "GymBro",

    description: "Приложения для знакомств/поиска партнера для тренировок",
    href: "/",
    mobile: true,
  },
];

export default function Portfolio({ lang }: { lang: string }) {
  return (
    <section id="portfolio">
      <BentoGrid className="grid grid-cols-2">
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
                    objectFit="cover"
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
                    // objectFit="contain"
                  />
                }
              />
            ))}{" "}
      </BentoGrid>
      <BentoGrid className="grid grid-cols-4 mt-4">
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
    </section>
  );
}
