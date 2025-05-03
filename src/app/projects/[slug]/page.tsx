import { getProjectData } from "@/app/data";
import clsx from "clsx";
import { AppleIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";


type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

  if (!project) {
    notFound();
  }
  
  return (
    <div
      key={project[0]}
      className="flex flex-col items-center justify-start w-full pb-32 mt-16"
    >
      {project[1]?.ICON ? (
        <div className="w-12 h-12 mx-auto mb-5">
          <Image
            src={project[1]?.ICON}
            alt={"project icon"}
            width={48}
            height={48}
            className="mb-4 border border-gray-100 rounded-full shadow-lg dark:border-gray-600"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white dark:text-black bg-foreground border border-gray-100 rounded-full dark:border-gray-800 mb-5 mx-auto">
          {project[1]?.TITLE?.slice(0, 2)}
        </div>
      )}
      <h2 className="text-4xl font-semibold mb-5 md:text-4xl text-center max-w-[620px] mx-auto dark:text-white">
        {project[1].TITLE}
      </h2>
      <div className="flex gap-2 items-center justify-center mb-5 flex-wrap">
        <div className="flex gap-2 items-center">
          {project[1]?.STATUS ? (
            <span
              className={clsx(
                "font-mono border  px-1 py-px rounded-md text-gray-600 dark:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs",
                project[1]?.STATUS === "Active"
                  ? "border-green-500 dark:bg-green-500/30 dark:border-green-800 dark:text-green-200 bg-green-100 text-green-700"
                  : "border-gray-200 dark:border-gray-700"
              )}
            >
              {project[1]?.STATUS}
            </span>
          ) : (
            ""
          )}
          {project[1]?.STATUS_TEXT?.length
            ? project[1]?.STATUS_TEXT?.map((status) => (
              <span
                key={status}
                className={clsx(
                  "font-mono border  px-1 py-px rounded-md text-gray-600 dark:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs border-gray-200 dark:border-gray-700"
                )}
              >
                {status}
              </span>
            ))
            : ""}
        </div>
        {project[1]?.TECH ? (
          <div className="flex flex-wrap gap-2 text-xs">
            {project[1]?.TECH.map((tech) => (
              <div
                key={tech}
                className="font-mono border border-gray-200 dark:border-gray-700 px-1 py-px rounded-md text-gray-600 dark:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs"
              >
                {tech}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center items-center space-x-5 max-w-[620px] w-full mt-5 mb-10">
        {project[1]?.WEB ? (
          <a
            href={project[1]?.WEB}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">
              <ExternalLinkIcon />
            </span>
            <span>Web App</span>
          </a>
        ) : (
          ""
        )}
        {project[1]?.IOS ? (
          <a
            href={project[1]?.IOS}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">
              <AppleIcon />
            </span>
            <span>iOS App</span>
          </a>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-4">
        
        {project[1]?.IMAGE_URL?.trim() ? (
          <Image src={project[1].IMAGE_URL} alt="" className="rounded-md" width={600} height={600} />
        ) : ""}


        {/*  Project Description */}
        {project[1]?.CONTENT ? (
          <div className="flex flex-col gap-4">
            {project[1].CONTENT.map((content, idx) => {
              return (
                <div key={idx} className="text-foreground">
                  {content}
                </div>
              );
            })}
          </div>

        ) : ""}


        {/*  Project Features */}
        {project[1]?.FEATURES?.length ? (<div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Key Features</h1>
          <ul className="list-disc list-inside flex flex-col gap-2">
            {project[1].FEATURES.map((feature, idx) => {
              return <li key={idx}>{feature}</li>;
            })}
          </ul>
        </div>
        ) : ""}

         {/*  Project Features */}
         {project[1]?.LINKS ? (<div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">External Links</h1>
          <ul className="list-disc list-inside flex flex-col gap-2">
            {project[1].LINKS.map((link, idx) => {
              return <div className="flex gap-2" key={idx}>
                <p>{link.LINK_DESCRIPTION}</p>
                <a href={link.LINK_URL} className="underline">{link.LINK_TEXT}</a>
              </div>
            })}
          </ul>
        </div>
        ) : ""}
      </div>
    </div>
  );
}
