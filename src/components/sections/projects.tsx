import { ExternalLink, Folder, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProjectData {
  SLUG: string;
  ICON: string;
  TITLE: string;
  STATUS: string,
  LINK: string,
  TAGLINE: string
  WEB:string
}

export function Projects({
  data,
  all,
}: {
  data: Record<string, IProjectData>;
  all: string;
}) {
  return (
    <div id="projects" className="py-10">
      <h2 className="text-base font-medium text-primary/90">projects.</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(data).map(([key,value]) => (
          <div
            className="min-w-[120px] flex-col px-4 py-1 border border-gray-200 dark:border-[#383838] rounded-lg hover:bg-gray-100 dark:bg-[#212121] dark:hover:bg-[#262626] dark:hover:border-[#4b4b4b] dark:shadow-[0_0_8px_rgba(0,0,0,0.8)] shadow-[0_0_8px_rgba(0,0,0,0.06)] flex relative"
            key={value?.TITLE + key}
          >
            {value?.WEB ? (
              <Link
                href={value?.WEB}
                target="_blank"
                title={value?.TITLE}
              >
                <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                  <ExternalLink className="text-base h-4 w-4" />
                </div>
              </Link>
            )
              : (
                ""
              )}


            {value?.LINK ? (
              <Link
                href={value?.LINK}
                target="_blank"
                title={value?.TITLE}
              >
                <div className="absolute top-[10%] right-[25%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                  <Github className="text-base h-4 w-4" />
                </div>
              </Link>
            )
              : (
                ""
              )}
            <Link
              href={`/projects/${value?.SLUG}` || "/"}
              key={value?.TITLE}
            >
              <div className="pt-3 pb-2 relative">
                {value?.ICON ? (
                  <Image
                    className="w-[32px] drop-shadow-xl"
                    src={value?.ICON}
                    alt={value?.TITLE}
                    height={32}
                    width={32}
                  />
                ) : (
                  <>
                    <Folder className="h-4 w-4" />
                  </>
                )}
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-[6px] mt-1">
                  <h3 className="font-medium text-base">
                    {value?.TITLE}
                  </h3>
                  {value?.STATUS === "Active" ? (
                    <div
                      className="w-[8px] h-[8px] rounded-full bg-green-500"
                      title="Active"
                    />
                  ) : (
                    ""
                  )}
                </div>
                {value?.TAGLINE ? (
                  <p className="text-sm opacity-80">{value?.TAGLINE}</p>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-sm text-muted-foreground"
          href={all}
        >
          View all projects
        </a>
      </div>
    </div>
  );
}
