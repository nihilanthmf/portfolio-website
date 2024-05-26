"use client";

import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import Header from "../components/Header";
import DotPattern from "../components/magicui/dot-pattern";
import WordRotate from "../components/magicui/word-rotate";
import Subheader from "../components/Subheader";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "../components/ui/button";
import { PiArrowBendDownLeft, PiArrowBendUpRight } from "react-icons/pi";

export default function Hero({ lang }: { lang: string }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 flex flex-col">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(70%_120%_at_50%_0%,rgba(225,225,225,0.6)_0%,rgba(255,255,255,0.00)_100%)] "
          )}
        />
        <Header>Hi, I'm Artemy 👋</Header>
        <div className="flex flex-row items-center text-left">
          <Subheader>Building </Subheader>{" "}
          <WordRotate
            className="text-2xl bg-clip-text inline-block text-transparent bg-gradient-to-r from-primary to-[#f27f34] font-bold ml-[0.5em]"
            words={[
              "SaaS Apps",
              "Full Stack Apps",
              "MVPs",
              "Websites",
              "Mobile Apps",
            ]}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <Button
            className={`${cn(buttonVariants({ variant: "default" }))}`}
            onClick={(e) => {
              e.preventDefault();
              //@ts-ignore
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </Button>
          <Button
            className={`${cn(buttonVariants({ variant: "outline" }))}`}
            onClick={(e) => {
              e.preventDefault();
              //@ts-ignore
              document
                .getElementById("portfolio")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            My Portfolio
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 ">
          <IoLogoGithub
            // color="#fff"
            size={25}
            className="transition-all hover:scale-[90%] cursor-pointer  text-white hover:text-primary"
            onClick={() => {
              window.open("https://github.com/nihilanthmf", "_blank");
            }}
          />
          <IoLogoTwitter
            // color="#fff"
            size={25}
            className="transition-all hover:scale-[90%] cursor-pointer text-white hover:text-primary"
            onClick={() => {
              window.open("https://twitter.com/artemy_medvedev", "_blank");
            }}
          />
          <FaTelegram
            // color="#fff"
            size={25}
            className="transition-all hover:scale-[90%] cursor-pointer text-white hover:text-primary"
            onClick={() => {
              window.open("https://t.me/holygoose", "_blank");
            }}
          />
        </div>
        <div className="flex flex-col items-center mr-32">
          <PiArrowBendUpRight color="#fff" size={25} className="-rotate-[30deg] mb-2"/>
          <p className="text-text text-[12px] text-center mr-2">
            1500+ contributions<br></br>in the last 6 months 🤯
          </p>
        </div>
      </div>
    </div>
  );
}
