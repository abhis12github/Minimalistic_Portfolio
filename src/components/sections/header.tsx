import { Briefcase, Code2, Github, GraduationCap, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { MovingElement } from "../navbar";
import Link from "next/link";
import clsx from "clsx";


const INFO = [
  {
    text: "From India",
    icon: <MapPin />,
    className: "bg-yellow-50 text-yellow-800",
  },
  {
    text: (
      <> <Link
        target="_blank"
        href="https://iiitranchi.ac.in/"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        Indian Institute Of Information Technology, Ranchi
      </Link>
      </>
    ),
    icon: <GraduationCap />,
    className: "bg-slate-50 text-slate-800",
  },

  {
    text: (
      <>
        Previously at{" "}
        <Link
          target="_blank"
          href="https://bloghunch.com/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          BlogHunch
        </Link>

      </>
    ),
    icon: <Briefcase />,
    className: "bg-blue-50 text-blue-800",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://leetcode.com/u/code_15_11/"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        Quests on Leetcode
      </Link>
    ),
    icon: <Code2 />,
    className: "text-gray-900 bg-gray-100",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://www.instagram.com/_abhishek_anand_12/"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        Adventures on Instagram
      </Link>
    ),
    icon: <Instagram />,
    className: "text-orange-900 bg-orange-50",
  },
];


export function Header({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };



  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I&apos;m
        </p>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {data.NAME}
          </h1>
          <h2 className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>
              {data.AGE}, {data.PRONOUN}
            </p>
            <p>{data.HEADLINE}</p>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          {INFO?.map((item, index) => (
            <div
              className={clsx(
                "border rounded-lg px-[10px] py-[6px] flex gap-1.5 items-center",
                item?.className
              )}
              key={index}
            >
              {item?.icon ? <div className="">{item?.icon}</div> : ""}
              <div>{item?.text}</div>
            </div>
          ))}
        </div>


        <div className="flex items-center gap-2 text-sm">
          <MovingElement
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow betterhover:hover:bg-primary/90 h-9 px-4 py-2"
            change={() => handleChange(data.RESUME)}
            toChange={false}
            ariaLabel="Resume"
          >
            Resume
          </MovingElement>
          <div className="flex gap-2">
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
            >
              <Mail />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.GITHUB)}
              ariaLabel="Github"
            >
              <Github />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.LINKEDIN)}
              ariaLabel="Linkedin"
            >
              <Linkedin />
            </MovingElement>



          </div>


        </div>


      </div>
    </section>
  );
}
