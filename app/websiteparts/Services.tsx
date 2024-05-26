import IconCloud from "../components/magicui/icon-cloud";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "SaaS and Startups",
    description:
      "I develop complex SaaS apps for your startup. A few examples of my past work are AI customer support solution and Twitter Cold DM automation software",
  },
  {
    title: "Website development",
    description:
      "I make beautiful website (just like this one) and will be happy to help you out!",
  },
  {
    title: "Mobile app development",
    description:
      "Mobile app developer. I have social apps, dating apps, AI apps and more under my belt",
  },
];

const serviceListRu: ServiceProps[] = [
  {
    title: "SaaS и Стартапы",
    description:
      "Я могу разработать сложные SaaS-приложения для вашего стартапа. Разработал решение для поддержки клиентов с помощью ИИ и софт для автоматизации холодной рассылки в Twitter с ИИ",
  },
  {
    title: "Веб-разработка",
    description:
      "Более 2 лет веб-разработки. Я могу спроектировать и разработать вам классный сайт!",
  },
  {
    title: "Мобильная разработка",
    description:
      "Я могу разработать мобильное приложение для вашего продукта. Создал приложения для знакомств, приложения с ИИ и многое другое",
  },
];

const icons = [
  "typescript",
  "javascript",
  "supabase",
  "unity",
  "csharp",
  "javascript",
  "reactnative",
  "openai",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "tailwind",
  "puppeteer",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
];

export default function Services({ lang }: { lang: string }) {
  return (
    <section className="container sm:pb-32 mb-16" id="services">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-text">
            {lang === "en" ? "How can I " : "Чем я могу "}
            <span className="text-primary bg-clip-text">
              {lang === "en" ? "help You? " : "помочь Вам? "}
            </span>
          </h2>
          <p className="text-text/70 text-xl mt-4 mb-8 ">
            {lang === "en"
              ? "5+ years of software development"
              : "5+ лет разработки продуктов"}
          </p>
          <div className="grid gap-4">
            {lang === "ru"
              ? serviceListRu.map(({ title, description }: ServiceProps) => (
                  <Card name={title} description={description} />
                ))
              : serviceList.map(({ title, description }: ServiceProps) => (
                  <Card name={title} description={description} />
                ))}
          </div>{" "}
        </div>

        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-black px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={icons} />
        </div>
      </div>
    </section>
  );
}

const Card = ({ name, description }: { name: string; description: string }) => {
  return (
    <div
      className={
        "group relative col-span-1 p-4 flex transition-all  flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      }
    >
      {/* <div>{background}</div> */}
      <div
        className={
          "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 bg-background"
        }
      >
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="max-w-lg text-text ">{description}</p>
      </div>
    </div>
  );
};
