import { Button, buttonVariants } from "@/components/ui/button";
import { PageTitle } from "@/components/ui/page-title";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Feature } from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex text-center flex-col bg-white">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-8xl md:leading-[5rem] mb-6"
          text="Pake Kreate lah boss"
        />
        <p className="max-w-xl mx-auto text-md md:text-lg text-neutral-700 dark:text-neutral-400 text-center font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          voluptas architecto eligendi dicta, nesciunt culpa magni explicabo.
        </p>
        <a href="" className="z-10">
          <Button className="my-10 px-28 py-5 font-black">Join Us!</Button>
        </a>
      </BackgroundLines>

      <Feature />

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl bg-white">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>

      <Footer />
    </div>
  );
}

const reviews = [
  {
    name: "Mike",
    username: "@michael._.chrisandy",
    body: "bang kapan kita haru pake id sequensial  kapan kita harus pake uuid di pgsql",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "John",
    username: "@jonathan.aaronn",
    body: "Semangatin aku dong bang ^^",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Hose",
    username: "@mikhaelhosee",
    body: "bang impian karir ku jadi CTO juga, apa yang pertama kali harus dimulai?",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Cece",
    username: "@gracellanoveliora",
    body: "sebagai be developer, soft skills apa aja si yang dilirik?",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Theo",
    username: "@theodevoid",
    body: "bang temen aku ultah, tolong ucapin dong. namanya gaho",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Kenji",
    username: "@valentinuskenji",
    body: "sebut nama aku dong kak",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
