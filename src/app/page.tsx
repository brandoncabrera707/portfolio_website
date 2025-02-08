
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-20 py-6 text-slate-200 ">
        <div className="flex flex-row">
          
          <div className=" flex flex-col text-5xl font-bold ">Brandon Cabrera
            <div className="text-3xl font-light py-6">
              <p className='py-2'>Mt. San Antonio College Student | Transfer Student</p>
              <p className='py-2'>Planning to transfer to a 4-year university to obtain a Bachelor's Degree in Computer Science </p>
              <p className='pt-2'>Aspiring Software Engineer/Machine Learning Engineer</p>
            </div>
            <a href='/resume.pdf' className="text-2xl font-bold">View Resume{'>>'} </a>

          
          </div>

          <div className="p-5 flex flex-col">
            <Image
              src="/profilepic.jpg"
              alt="Profile Picture"
              width={210}
              height={200}
              className=" object-contain"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold pt-7">About Me</h1>
            <div className='text-3xl font-light py-4'>
            Hi, my name is Brandon! Thank you for visiting my website.
            I am currently a student at Mt. San Antonio College, planning to transfer to a four-year 
            university to pursue a degree in Computer Science. 
            My goal is to obtain a Master's Degree in Machine Learning or Artificial Intelligence.
            </div>

            <div className='text-3xl font-light py-4'>
            Right now, I am focused on strengthening my programming foundation to prepare for future machine learning projects. I am also working on personal projects to improve my skills and knowledge in software development.  

            </div>
      </div>
      
    </>
  );
}