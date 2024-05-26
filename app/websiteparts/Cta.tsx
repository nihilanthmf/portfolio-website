import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

export default function CTA({ lang }: { lang: string }) {
  return (
    <section
      id="contact"
      className="shadow-lg mr-4 ml-4 md:mr-32 md:ml-32 py-16 md:py-24 mt-16 h-[80vh] flex justify-center items-center"
    >
      <div className="h-[50vh] w-full flex flex-col justify-center items-center place-items-center bg-gradient-to-b from-primary to-[#f27f34] shadow-[0px_0px_8px_8px_rgba(235,94,40,0.3)] rounded-[8px] ">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            {lang === "en" ? "Let have a chat " : "Давайте обсудим "}
            <br></br>
            <span className="bg-gradient-to-b from-white/80 to-primary/10 text-transparent bg-clip-text">
              {lang === "en" ? "about your idea!" : "Вашу идею!"}
            </span>
          </h2>
          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0 text-center text-black">
            Create a free account
          </p> */}
        </div>

        <div className="text-lg font-bold text-white text-center my-8">
          {lang === "ru" ? "Напишите мне на" : "Email me at"}{" "}
          <a
            className="underline"
            href="mailto:artemiy.logmy@gmail.com"
            target="_blank"
          >
            artemiy.logmy@gmail.com
          </a>
          <br></br>
          {lang === "ru" ? "Или свяжитесь со мной через:" : "Or contact me on:"}
          <div className="flex flex-row justify-evenly mt-8 ">
            <IoLogoGithub
              // color="#fff"
              size={35}
              className="transition-all hover:scale-[90%] cursor-pointer  text-white hover:text-background"
              onClick={() => {
                window.open("https://github.com/nihilanthmf", "_blank");
              }}
            />
            <IoLogoTwitter
              // color="#fff"
              size={35}
              className="transition-all hover:scale-[90%] cursor-pointer text-white hover:text-background"
              onClick={() => {
                window.open("https://twitter.com/artemy_medvedev", "_blank");
              }}
            />
            <FaTelegram
              // color="#fff"
              size={35}
              className="transition-all hover:scale-[90%] cursor-pointer text-white hover:text-background"
              onClick={() => {
                window.open("https://t.me/holygoose", "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
