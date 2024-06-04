import IconCloud from "../components/magicui/icon-cloud";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "SaaS and Startups",
    description:
      "I develop complex SaaS apps. A few examples of my past work are AI customer support solution and Twitter Cold DM automation software",
  },
  {
    title: "Frontend development",
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
      "Я разрабатываю сложные SaaS-приложения (веб сервисы). Разработал решение для поддержки клиентов с помощью ИИ и софт для автоматизации холодной рассылки в соц. сетях с ИИ",
  },
  {
    title: "Веб-разработка",
    description: "Делаю классные сайты (как этот) и буду рад вам помочь с ним!",
  },
  {
    title: "Мобильная разработка",
    description: "Разработаю кросс-платформенные мобильные приложения",
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
    <section className=" sm:pb-32 mb-16" id="services">
      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
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
              ? serviceListRu.map(
                  ({ title, description }: ServiceProps, index: number) => (
                    <Card name={title} description={description} key={index} />
                  )
                )
              : serviceList.map(
                  ({ title, description }: ServiceProps, index: number) => (
                    <Card name={title} description={description} key={index} />
                  )
                )}
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
