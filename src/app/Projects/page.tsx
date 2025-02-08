'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Projects() {
  const [viewColor, setViewColor] = useState("text-slate-200");
  const [githubColor, setGithubColor] = useState("/projectsGithub.svg")
  return (
  <>
  <div className=" flex flex-col font-bold text-5xl p-20 text-slate-200 ">
    <div className=' pb-10'>Projects</div>

    <div className='flex flex-row bg-blue-400 rounded-2xl p-10 gap-8'>
      <div>
        <Image
         src = '/typingFrenzy.jpg'
         alt = 'Typing Frenzy'
         width={600}
         height={500}
        />
      </div>
      <div className='flex flex-col justify-between flex-1'>
        <div className='flex flex-row justify-between items-start'>
          <div className='flex flex-col text-3xl font-light'>
            <h1 className='text-3xl font-bold'>Typing Frenzy 🔥</h1>
            <div className='text-xl'>A game to test how fast you can type </div>
          </div>
          
          <div className='flex flex-row space-x-4'>
            <div className={`${viewColor} border-2 viewColor text-4xl border-slate-200 rounded-lg p-2 cursor-pointer`}
            onMouseEnter={() => setViewColor("text-navbarbackground")} onMouseLeave={() => setViewColor("text-slate-200")}>
              <a href="https://typingfrenzy-d59e6.web.app/" target="_blank">View</a>
            </div>
            <div className='border-2 border-slate-200 rounded-lg p-2 cursor-pointer' onMouseEnter={() => setGithubColor("/projectGithubHover.svg")} 
                  onMouseLeave={() => setGithubColor("/projectsGithub.svg")}>
              <a href="https://github.com/brandoncabrera707/typing-frenzy" target="_blank">
                <Image src={`${githubColor}`} alt="Github" width={48} height={24} className="object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-row space-x-4 mt-auto'>
          <div className='border-2 border-slate-200 rounded-lg p-1 text-sm'>
            CSS
          </div>
          <div className='border-2 border-slate-200 rounded-lg p-1 text-sm'>
            JavaScript
          </div>
          <div className='border-2 border-slate-200 rounded-lg p-1 text-sm'>
            HTML5
          </div>
        </div>
      </div>
    </div>


    </div>
  </>
  );
}