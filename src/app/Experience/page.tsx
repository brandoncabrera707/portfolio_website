'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [viewMore, setViewMore] = useState("text-slate-200");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <>
    <div className="flex flex-col font-bold text-5xl p-20 text-slate-200">
      <div className='pb-10'>Work Experience</div>

      <div className='flex flex-row bg-blue-400 rounded-2xl p-10 gap-8'>
        <div>
          <Image
            src='/bp.png'
            alt='Typing Frenzy'
            width={200}
            height={500}
          />
        </div>
        <div className='flex flex-col justify-between flex-1'>
          <div className='flex flex-row justify-between items-start'>
            <div className='flex flex-col text-3xl font-light'>
              <h1 className='text-3xl font-bold'>Baldwin Park Unified School District IT Department ETS</h1>
              <div className='text-2xl'> 
                Intern | Summer 2023
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`${viewMore} font-light cursor-pointer border-2 border-slate-200 rounded-lg p-2 w-fit mt-4`}
                onMouseEnter={() => setViewMore("text-navbarbackground")}
                onMouseLeave={() => setViewMore("text-slate-200")}
              >
                {isExpanded ? 'View Less' : 'View More'}
              </button>
              {isExpanded && (
                <div className='text-xl font-light mt-4 space-y-2'>
                  <ul className='list-disc ml-6 space-y-2'>
                    <li>Conducted observations of a professional IT environment and understanding the protocols and practices in place</li>
                    <li>Responsible for overseeing the overall quality of Chromebooks through timely updates and maintenance</li>
                    <li>Helped facilitate the distribution process for Chromebooks to various sites</li>
                    <li>Kept inventory of Chromebooks and facilitated effective resource allocation</li>
                    <li>Developed systematic flow charts for key processes including, account relocations, including staff name changes, and new employee information input into the system</li>
                    <li>Provided on-site IT support for various school sites resolving issues and assisting in setting up technology before the start of the academic year</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}