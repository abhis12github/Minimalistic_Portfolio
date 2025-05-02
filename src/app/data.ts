import { cache } from "react";
import { marked } from "marked";


export interface IProjectData {
  SLUG: string;
  ICON: string;
  TITLE: string;
  STATUS: string;
  LINK: string;
  TAGLINE: string;
  STATUS_TEXT: string[];
  WEB: string;
  IOS: string;
  TECH: string[];
  CONTENT: string[];
  FEATURES: string[];
  IMAGE_URL: string;
  LINKS: {
    LINK_TEXT: string;
    LINK_DESCRIPTION: string;
    LINK_URL: string
  }[];
}

export const DATA = {
  HEADER: {
    NAME: "Abhishek Anand",
    AGE: "22",
    PRONOUN: "he/him",
    HEADLINE:
      "Building scalable, efficient, and future-ready web applications.",
    RESUME:
      "https://drive.google.com/drive/folders/1-sEiUQ51OcPJZuomv-BNx3QT5MFirjH4?usp=drive_link",
    EMAIL: "mailto:mailtomeabhi15@gmail.com",
    GITHUB: "https://github.com/abhis12github",
    LINKEDIN: "https://www.linkedin.com/in/abhishek-anand-0b3862257",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a passionate full-stack developer who enjoys crafting high-performance, scalable, and user-centric applications. I love tackling challenging problems, refining architectures, and delivering smooth user experiences.",
    EXPERTISE:
      "I specialize in Next.js, TypeScript, Node.js, React.js, and I'm comfortable navigating both frontend and backend to turn ideas into reality.",
    BLOG:
      "I'm excited about sharing knowledge through blogs, offering tips on web development, modern best practices, and emerging tech trends.",
  },


  EXPERIENCE: {
    "Blog Hunch/Entesta": {
      WEBSITE: "https://bloghunch.com/",
      POSITION: "Full Stack Developer",
      LOCATION: "Remote",
      DURATION: "Feb - May, 2025",

      DESCRIPTION: [
        "Delivered key frontend and backend features across 6+ client projects using modern, scalable technologies.",
        "Independently managed client communications and provided regular project updates to international clients from UAE, France, Singapore, Canada.",
        "Learned and applied AdonisJS for backend development, quickly adapting to project requirements and delivering high-quality solutions.",
        "Engineered responsive, high-performance web applications in collaboration with cross-functional teams, ensuring timely delivery and client satisfaction.",
      ],

      TECH_STACK: [
        "TypeScript",
        "Adonisjs",
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "ShadCN",
        "Node.js",
        "Express.js",
        "MySQL",
        "Supabase",
        "Chrome Extensions",
        "Vercel",
        "Git & Github",
      ],
    }
  },

  PROJECTS: {
    "GitBuddy": {
      SLUG: "gitbuddy",
      ICON: "",
      TITLE: "GitBuddy",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["Next.js", "Clerk", "NeonDB", "Gemini API", "AssemblyAI", "Octokit", "Prisma", "LangChain"],
      WEB: "https://dionysus-tan.vercel.app/",
      IOS: "",
      LINK: "https://github.com/abhis12github/gitBuddy",
      TAGLINE: "AI-powered GitHub query assistant.",
      HIDDEN: false,
      CONTENT: [
        "A web application enabling users to query GitHub repositories and collaborate on projects using AI-powered tools."
      ],
      FEATURES: [
        "Engineered a RAG pipeline using LangChain to fetch GitHub files, processed with Gemini 1.5 Flash for summarization, and stored vector embeddings (text-embedding-004) for optimized semantic search.",
        "Automated meeting transcription and generated summaries using AssemblyAI API.",
        "Implemented team collaboration via user invitations and project data access control.",
        "Integrated PayPal for secure payment processing, enabling credit-based usage and monetization."
      ],
      IMAGE_URL: "/gitbuddy.png",
      LINKS: [{
        LINK_TEXT: "GitHub.",
        LINK_DESCRIPTION: "View the source code on ",
        LINK_URL: "https://github.com/abhis12github/gitBuddy"
      }]
    },

    "Analytics": {
      SLUG: "analytics",
      ICON: "",
      TITLE: "Analytics",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["Next.js", "Supabase", "Google OAuth 2.0", "CryptoJS", "Recharts", "Shadcn/ui"],
      WEB: "https://analytics-xi-five.vercel.app/",
      IOS: "",
      LINK: "https://github.com/abhis12github/analytics",
      TAGLINE: "Website analytics and custom events tracking tool.",
      HIDDEN: false,
      CONTENT: [
        "A web application enabling users to track website performance and custom events for detailed insights."
      ],
      FEATURES: [
        "Developed a script generation system to monitor key analytics such as page views, visitor counts, and traffic sources.",
        "Implemented custom event tracking via a secure API using AES-GCM encryption and bcrypt SHA256 hashing.",
        "Added time-based filters to display analytics for specific date ranges, improving data granularity.",
        "Secured authentication flow using Supabase and Google OAuth 2.0."
      ],
      IMAGE_URL: "/analytics.png",
      LINKS: [{
        LINK_TEXT: "GitHub.",
        LINK_DESCRIPTION: "View the source code on",
        LINK_URL: "https://github.com/abhis12github/analytics"
      }]
    },

    "HomeNest": {
      SLUG: "homenest",
      ICON: "",
      TITLE: "HomeNest",
      STATUS: "Inactive",
      STATUS_TEXT: [],
      TECH: ["React.js", "Express.js", "Sass", "Zustand", "Socket.io", "Prisma", "Leaflet", "MongoDB Atlas"],
      WEB: "https://github.com/abhis12github/HomeNest",
      IOS: "",
      LINK: "https://github.com/abhis12github/HomeNest",
      TAGLINE: "Real estate platform to connect with property owners.",
      HIDDEN: false,
      CONTENT: [
        "A web application that allows users to discover, save, and directly communicate with property owners."
      ],
      FEATURES: [
        "Crafted a dynamic frontend using React and Sass, with Leaflet.js for interactive map-based property visualization.",
        "Enabled real-time messaging between users and property owners using Socket.io.",
        "Built a RESTful backend with Node.js, Express, and MongoDB Atlas for efficient data handling.",
        "Implemented advanced search and filtering by location, property type, and user preferences."
      ],
      IMAGE_URL: "/homenest.png",
      LINKS: [{
        LINK_TEXT: "GitHub.",
        LINK_DESCRIPTION: "View the source code on",
        LINK_URL: "https://github.com/abhis12github/HomeNest"
      }]
    },

    "MindNotes": {
      SLUG: "mindnotes",
      ICON: "",
      TITLE: "MindNotes",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["Next.js", "Adonis.js", "MySQL", "Shadcn/ui"],
      WEB: "",
      IOS: "",
      LINK: "",
      TAGLINE: "A smart PWA for capturing thoughts and tracking moods.",
      HIDDEN: false,
      CONTENT: [
        "MindNotes is a Progressive Web App (PWA) designed to help users record notes, set reminders, analyze mood patterns, and receive suggestions based on emotional trends.",
        "This was a client project, and due to confidentiality agreements, only limited details can be shared publicly."
      ],
      FEATURES: [

      ],
      IMAGE_URL: "/mindnotes.png",
      LINKS: [{
        LINK_TEXT: "",
        LINK_DESCRIPTION: "Code repository is private due to client confidentiality.",
        LINK_URL: ""
      }]
    },
    "DigitalWhiteboard": {
      SLUG: "digitalwhiteboard",
      ICON: "",
      TITLE: "Digital Whiteboard",
      STATUS: "Inactive",
      STATUS_TEXT: [],
      TECH: ["Next.js", "Express", "TypeScript", "Socket.io", "Canvas API", "Recoil", "Framer Motion"],
      WEB: "https://digitalwhiteboard-production.up.railway.app",
      IOS: "",
      LINK: "https://github.com/abhis12github/Digital_Whiteboard",
      TAGLINE: "Collaborative whiteboard for real-time visual brainstorming and drawing.",
      HIDDEN: false,
      CONTENT: [
        "A real-time collaborative whiteboard application enabling users to draw and interact simultaneously in a shared virtual canvas.",
        "Built using WebSocket communication for low-latency collaboration across clients."
      ],
      FEATURES: [
        "Real-time drawing and interaction using Socket.io for instant collaboration.",
        "Canvas-based freehand drawing with dynamic tools and user synchronization.",
        "State management with Recoil and smooth transitions powered by Framer Motion.",
        "Built with Next.js and Express for a performant and scalable full-stack setup."
      ],
      IMAGE_URL: "/digitalwhiteboard.png",
      LINKS: [{
        LINK_TEXT: "GitHub.",
        LINK_DESCRIPTION: "View the source code on",
        LINK_URL: "https://github.com/abhis12github/Digital_Whiteboard"
      }]
    },

    "AlgorithmVisualizer": {
      SLUG: "algorithmsvisualizer",
      ICON: "",
      TITLE: "Algorithms Visualizer",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["React", "TailwindCSS", "JavaScript", "DSA", "Particles.js"],
      WEB: "https://algorithms-visualiser.vercel.app",
      IOS: "",
      LINK: "https://github.com/abhis12github/algorithms-visualiser",
      TAGLINE: "Interactive tool to visualize algorithms with animations.",
      HIDDEN: false,
      CONTENT: [
        "An interactive algorithm visualizer application to help users understand algorithmic concepts through dynamic animations.",
        "Built with React and TailwindCSS, the application supports 10 algorithms including sorting, searching, and graph traversal.",
        "Enables users to explore algorithm behaviors across datasets with adjustable speed and size controls."
      ],
      FEATURES: [
        "Supports 5 sorting algorithms, 2 searching algorithms, and 3 graph algorithms with real-time animations.",
        "Adjustable animation speed and data set size for personalized learning experience.",
        "Built-in visual interface to understand each step of algorithm execution clearly.",
        "Future roadmap includes Recursion Tree and Dynamic Programming Table visualizations."
      ],
      IMAGE_URL: "/algorithmsvisualiser.png",
      LINKS: [
        {
          LINK_TEXT: "GitHub",
          LINK_DESCRIPTION: "View the source code on",
          LINK_URL: "https://github.com/abhis12github/algorithms-visualiser"
        }
      ]
    },
    "ObjectDetection": {
      SLUG: "object-detection",
      ICON: "",
      TITLE: "Object Detection",
      STATUS: "Inactive",
      STATUS_TEXT: [],
      TECH: ["Flask", "React", "Python", "JavaScript"],
      WEB: "https://github.com/abhis12github/Object_Detection",
      IOS: "",
      LINK: "https://github.com/abhis12github/Object_Detection",
      TAGLINE: "Real-time image processing and object detection.",
      HIDDEN: false,
      CONTENT: [
        "A full-stack web application that enables users to upload images and detect objects using a machine learning model.",
        "Built with Flask as the backend and React as the frontend to handle image uploads and real-time predictions.",
        "Ideal for exploring object detection models in a user-friendly web interface."
      ],
      FEATURES: [
        "Upload and analyze images using a machine learning object detection model.",
        "Flask backend to process and return annotated images with labels.",
        "React-based frontend for smooth UI interaction and file handling.",
        "Clear visual output of detected objects overlaid on the input image.",
        "Local development setup instructions provided for both backend and frontend."
      ],
      IMAGE_URL: "/objectdetection.png",
      LINKS: [
        {
          LINK_TEXT: "GitHub.",
          LINK_DESCRIPTION: "Full source code with setup and usage instructions on",
          LINK_URL: "https://github.com/abhis12github/Object_Detection"
        }
      ]
    },
    "CareShields": {
      SLUG: "careshields",
      ICON: "",
      TITLE: "CareShields",
      STATUS: "Active",
      STATUS_TEXT: [],
      TECH: ["Next.js", "TailwindCSS", "Adonis.js", "MySQL"],
      WEB: "",
      IOS: "",
      LINK: "",
      TAGLINE: "A Finance-focused lead generation platform.",
      HIDDEN: false,
      CONTENT: [
        "CareShields is a lead generation platform tailored for the finance sector, designed to streamline the user acquisition pipeline.",
        "This is a client project and detailed functionality and internal mechanisms are confidential due to NDA restrictions.",
        "The platform is built with a focus on high performance, secure data handling, and seamless integration into client workflows."
      ],
      FEATURES: [

      ],
      IMAGE_URL: "/careshields.png",
      LINKS: [
        {
          LINK_TEXT: "",
          LINK_DESCRIPTION: "Code repository is private due to client confidentiality.",
          LINK_URL: ""
        }
      ]
    },


  },
  ALL_PROJECTS:
    "https://github.com/abhis12github?tab=repositories"
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
