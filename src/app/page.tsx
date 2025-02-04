
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flew-col p-6 justify-center">
        <div className="flex flex-row">
          
          <div className=" flex flex-col text-5xl font-bold ">Brandon Cabrera
            <div className="text-3xl font-light py-1.5">
              <p>Mt. San Antonio College Student | Transfer Student</p>
              <p>Planning to transfer to a 4-year university to obtain a Bachelor's Degree in Computer Science </p>
              <p>Aspiring Software Engineer / Machine Learning Engineer</p>
            </div>
            <a href='/resume.pdf' className="text-2xl font-bold">View Resume>></a>
          </div>

          <div className="px-10 flex flex-col flex-grow-1">
            <Image
              src="/profilepic.jpg"
              alt="Profile Picture"
              width={180}
              height={200}
              className=" object-contain"
            />
          </div>
        </div>

   
      </div>
      
    </>
  );
}