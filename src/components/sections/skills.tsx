import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiNexon,
  SiSupabase,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiMongoose,
  SiSequelize,
  SiRabbitmq,
  SiPrisma,
  SiGooglegemini,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiSocketdotio,
  SiSass,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandAdonisJs, TbBrandOpenai } from "react-icons/tb";
import { SkillDataProvider } from "../SkillDataProvider";
import { ReactNode } from "react";

const Skill_data = [
  {
    skill_name: "C",
    Image: SiC,
    width: 42,
    height: 42,
    color: "#5E97D0",
  },
  {
    skill_name: "C++",
    Image: SiCplusplus,
    width: 42,
    height: 42,
    color: "#659AD2",
  },
  {
    skill_name: "JavaScript",
    Image: SiJavascript,
    width: 42,
    height: 42,
    color: "#F7DF1E",
  },
  {
    skill_name: "TypeScript",
    Image: SiTypescript,
    width: 42,
    height: 42,
    color: "#3178C6",
  },
  {
    skill_name: "Python",
    Image: SiPython,
    width: 42,
    height: 42,
    color: "#3776AB",
  },
  {
    skill_name: "MySQL",
    Image: SiMysql,
    width: 42,
    height: 42,
    color: "#4479A1",
  },
  {
    skill_name: "MongoDB",
    Image: SiMongodb,
    width: 42,
    height: 42,
    color: "#47A248",
  },
  {
    skill_name: "NeonDB",
    Image: SiNexon,
    width: 42,
    height: 42,
    color: "#00E699",
  },
  {
    skill_name: "Supabase",
    Image: SiSupabase,
    width: 42,
    height: 42,
    color: "#3ECF8E",
  },
  {
    skill_name: "Cloudinary",
    Image: SiCloudinary,
    width: 42,
    height: 42,
    color: "#3448C5",
  },
  {
    skill_name: "Git",
    Image: SiGit,
    width: 42,
    height: 42,
    color: "#F05032",
  },
  {
    skill_name: "GitHub",
    Image: SiGithub,
    width: 42,
    height: 42,
    color: "foreground",
  },
  {
    skill_name: "Postman",
    Image: SiPostman,
    width: 42,
    height: 42,
    color: "#FF6C37",
  },
  {
    skill_name: "Mongoose",
    Image: SiMongoose,
    width: 42,
    height: 42,
    color: "#880000",
  },
  {
    skill_name: "Sequelize",
    Image: SiSequelize,
    width: 42,
    height: 42,
    color: "#52B0E7",
  },
  {
    skill_name: "RabbitMQ",
    Image: SiRabbitmq,
    width: 42,
    height: 42,
    color: "#FF6600",
  },
  {
    skill_name: "Prisma",
    Image: SiPrisma,
    width: 42,
    height: 42,
    color: "#2D3748",
  },
  {
    skill_name: "Gemini",
    Image: SiGooglegemini,
    width: 42,
    height: 42,
    color: "#8E75B2",
  },
  {
    skill_name: "Express.js",
    Image: SiExpress,
    width: 42,
    height: 42,
    color: "foreground",
  },
  {
    skill_name: "Adonis.js",
    Image: TbBrandAdonisJs,
    width: 42,
    height: 42,
    color: "#5A45FF",
  },
  {
    skill_name: "React",
    Image: SiReact,
    width: 42,
    height: 42,
    color: "#61DAFB",
  },
  {
    skill_name: "Next.js",
    Image: SiNextdotjs,
    width: 42,
    height: 42,
    color: "foreground",
  },
  {
    skill_name: "Node.js",
    Image: SiNodedotjs,
    width: 42,
    height: 42,
    color: "#339933",
  },
  {
    skill_name: "Tailwind CSS",
    Image: SiTailwindcss,
    width: 42,
    height: 42,
    color: "#06B6D4",
  },
  {
    skill_name: "Bootstrap",
    Image: SiBootstrap,
    width: 42,
    height: 42,
    color: "#7952B3",
  },
  {
    skill_name: "Redux",
    Image: SiRedux,
    width: 42,
    height: 42,
    color: "#764ABC",
  },
  {
    skill_name: "Langchain",
    Image: TbBrandOpenai,
    width: 42,
    height: 42,
    color: "#10a37f",
  },
  {
    skill_name: "Socket.io",
    Image: SiSocketdotio,
    width: 42,
    height: 42,
    color: "foreground",
  },
  {
    skill_name: "Sass",
    Image: SiSass,
    width: 42,
    height: 42,
    color: "#CC6699",
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    width: 42,
    height: 42,
    color: "foreground",
  },
];

const InfiniteMovingRow = ({
  children,
  direction,
  speed = 35,
  className = "",
}: {
  children: ReactNode;
  direction: "left" | "right";
  speed: number;
  className: string;
}) => {
  return (
    <div className={`flex gap-x-[30px] relative overflow-hidden ${className} bg-background`}>
      <motion.div
        className="flex gap-x-[30px] min-w-full"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  // Organize skills in smaller groups for the infinite rows
  const organizeSkillsInGroups = () => {
    // Split the skills into smaller groups of 6-7 skills
    const group1 = Skill_data.slice(0, 10);
    const group2 = Skill_data.slice(10, 20);
    const group3 = Skill_data.slice(20, 30);

    return [group1, group2, group3].filter((group) => group.length > 0);
  };

  const skillGroups = organizeSkillsInGroups();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center gap-3 h-full relative overflow-hidden mt-8 mb-12"
    >
      <h2 className="text-base font-medium text-primary/90 mb-4">
        technical skills.
      </h2>

      <div className="flex flex-col relative gap-y-5 py-4 ">
        <div
          className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, background 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, background 100%)",
          }}
        />

        {skillGroups.map((group, groupIndex) => (
          <InfiniteMovingRow
            key={groupIndex}
            direction={groupIndex % 2 === 0 ? "left" : "right"}
            speed={30} // Varying speeds
            className="py-2"
          >
            {group.map((skill, skillIndex) => (
              <SkillDataProvider
                key={`${groupIndex}-${skillIndex}`}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={skillIndex}
                color={skill.color}
                skill_name={skill.skill_name}
              />
            ))}
          </InfiniteMovingRow>
        ))}
      </div>

    
    </section>
  );
};

export default Skills;
