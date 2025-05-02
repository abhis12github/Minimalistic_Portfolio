import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Abhishek Anand | Software Developer",
  description:
    "Software developer specializing in Next.js, TypeScript and Node.js.",
  openGraph: {
    title: "Abhishek Anand | Software Developer",
    description:
      "Software developer specializing in Next.js, TypeScript, and Node.js. Experienced in building scalable, high-performance applications.",
    url: "https://abhishek-anand.portfolio/",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Anand | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Abhishek Anand", url: "https://abhishek-anand.portfolio/" },
  ],
  keywords: [
    "Abhishek Anand",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "GCP",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "Web Development",
  ],
  creator: "Abhishek Anand",
  publisher: "Abhishek Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
