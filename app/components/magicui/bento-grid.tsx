import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full grid-cols-2 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  stack,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  stack: string;
  description: string;
  href: string;
  cta: string;
}) => {
  // console.log(name, className, background, Icon, description, href, cta);

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        // "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div>{background}</div>
      <div
        className={
          cta !== ""
            ? "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 -translate-y-10 md:translate-y-0 transition-all duration-300 bg-background group-hover:-translate-y-10"
            : "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6"
        }
      >
        {/* <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="max-w-lg text-text">{description}</p>
      </div>

      {cta !== "" ? (
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-0 md:translate-y-10 transform-gpu flex-row justify-between items-center p-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          )}
          style={{ zIndex: 10 }}
        >
          <Button variant="ghost" asChild size="sm">
            <a href={href} target="_blank">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className=" text-[12px] text-text">{stack}</p>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
    </div>
  );
};

export { BentoCard, BentoGrid };
