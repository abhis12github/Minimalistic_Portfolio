"use client";
import { Navbar } from "@/components/sections";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Navbar />

      <main className="min-h-fit px-4">{children}</main>
    </div>
  );
}
