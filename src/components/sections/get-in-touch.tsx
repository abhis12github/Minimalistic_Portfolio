// ContactSection.jsx
import React from 'react';
import Link from 'next/link';
import { Github, Instagram, Linkedin, Box, FileUser } from 'lucide-react';
import { MovingElement } from '../navbar';

const ContactSection = () => {
    return (
        <section className="relative bg-transparent text-white mt-12 flex flex-col justify-center">
            {/* Section numbering */}
            <div className="container mx-auto px-4">
                <p className="dark:text-[#64ffda] text-[#00796b]  mb-2 text-center">
                    What&apos;s Next?
                </p>

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-foreground mb-4">
                    Get In Touch
                </h2>

                {/* Contact message */}
                <div className="max-w-2xl mx-auto text-center mb-6 text-md text-gray-400">
                    <p>
                        I&apos;m currently open to new opportunities! Whether you have a project, a position, or just want to connect, feel free to reach out. I&apos;ll get back to you as soon as I can!
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center">


                    <MovingElement
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow betterhover:hover:bg-primary/90 h-9 px-4 py-2"
                        toChange={false}
                        ariaLabel="Resume"
                    >
                        <Link
                            href="mailto:mailtomeabhi15@gmail.com"
                        >
                            Say Hello 🙋🏻‍♂️
                        </Link>
                    </MovingElement>
                </div>
            </div>

            {/* Social links sidebar */}
            <div className="fixed left-10 bottom-0 hidden lg:block">
                <div className="flex flex-col items-center">
                    <Link href="https://github.com/abhis12github" target="_blank" rel="noopener noreferrer" className="p-3 text-foreground hover:scale-150 transition-all">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/_abhishek_anand_12/" target="_blank" rel="noopener noreferrer" className="p-3 text-foreground hover:scale-150 transition-all">
                        <Instagram size={20} />
                    </Link>
                    <Link href="https://drive.google.com/drive/folders/1-sEiUQ51OcPJZuomv-BNx3QT5MFirjH4?usp=drive_link" target="_blank" rel="noopener noreferrer" className="p-3 text-foreground hover:scale-150 transition-all">
                        <FileUser size={20} />   
                    </Link>
                    <Link href="https://www.linkedin.com/in/abhishek-anand-0b3862257" target="_blank" rel="noopener noreferrer" className="p-3 text-foreground hover:scale-150 transition-all">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://abhishekportfolio-blue.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 text-foreground hover:scale-150 transition-all">
                        <Box size={20} />
                    </Link>
                    <div className="h-24 w-px bg-foreground mt-4"></div>
                </div>
            </div>

            {/* Email sidebar */}
            <div className="fixed right-10 bottom-0 hidden lg:block">
                <div className="flex flex-col items-center">
                    <Link
                        href="mailto:mailtomeabhi15@gmail.com"
                        className="text-foreground hover:scale-110 transition-all vertical-text py-3"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        mailtomeabhi15@gmail.com
                    </Link>
                    <div className="h-24 w-px bg-foreground mt-4"></div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
