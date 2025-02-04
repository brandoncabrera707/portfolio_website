'use client';
import "./globals.css";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [aboutColor, setAboutColor] = useState("text-gray-400");
  const [projectsColor, setProjectsColor] = useState("text-gray-400");
  const [experienceColor, setExperienceColor] = useState("text-gray-400");
  const [emailColor, setEmailColor] = useState("/email.svg");
  const [githubColor, setGithubColor] = useState("/github.svg");
  const [linkedinColor, setLinkedinColor] = useState("/linkedin.svg");

  return (
    <html lang="en">
      <body className=" bg-gradient-to-b from-blue-500 to-cyan-500 h-screen text-slate-50">
        <div id="navBarDiv" className="flex flex-row sticky top-0 bg-navbarbackground text-gray-400 font-bold text-xl z-50 h-20">
          <div id="logoDiv" className="flex flex-row justify-start items-center">
            <Image 
              src="/logo.svg"
              alt="Profile Picture"
              width={80}
              height={40}
              className=" object-contain "
            />
          </div>
          <div id="linksDiv" className="flex flex-row flex-grow justify-center space-x-4">
              <div className=" cursor-pointer" >
                <Link href="/" className={`block px-6 py-6 ${aboutColor}`} onMouseEnter={() => setAboutColor("text-logoBlue")} onMouseLeave={() => setAboutColor("text-gray-400")} >
                About Me
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/Projects" className={`block px-6 py-6 ${projectsColor}`} onMouseEnter={() => setProjectsColor("text-logoBlue")} onMouseLeave={() => setProjectsColor("text-gray-400")}>Projects</Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/Experience" className={`block px-6 py-6 ${experienceColor}`} onMouseEnter={() => setExperienceColor("text-logoBlue")} onMouseLeave={() => setExperienceColor("text-gray-400")}>Work Experience</Link>
              </div>
          </div>
          <div id="linksDiv" className="flex flex-row justify-end space-x-4">
            <div className="hover: cursor-pointer transition-colors c">
              <a href=" mailto:brandoncabrera707@gmail.com" className="block p-6 ">
                <Image 
                  src={`${emailColor}`}
                  alt="Download Icon"
                  width={44}
                  height={48}
                  className=" object-contain" onMouseEnter={() => setEmailColor("/emailHover.png")} onMouseLeave={() => setEmailColor("/email.svg")} 
                />
              </a>
            </div>
            <div className="hover: cursor-pointer">
              <a href="https://github.com/brandoncabrera707" target = "_blank" className="block p-5 ">
               <Image 
                src={`${githubColor}`}
                alt="Github Icon"
                width={48}
                height={40}
                className=" object-contain" onMouseEnter={() => setGithubColor("/githubHover.svg")} onMouseLeave={() => setGithubColor("/github.svg")}
               />
              </a>
            </div>
            <div className="hover: cursor-pointer">
              <a target = "_blank" href="https://linkedin.com/in/brandon-cabrera-we3 " className="block p-6">
              <Image 
                src={`${linkedinColor}`}
                alt="Linkedin Icon"
                width={44}
                height={44}
                className=" object-contain" onMouseEnter={() => setLinkedinColor("/linkedinHover.svg")} onMouseLeave={() => setLinkedinColor("/linkedin.svg")}
              />
              </a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
