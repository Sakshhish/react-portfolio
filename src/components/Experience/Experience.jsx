import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiRedis } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572b6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAF8' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color='#F24E1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color='#47A248' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiRedis color='#FF44338' size={50} />
          </span>
        </div>
        <div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <span className='text-white'>
                <h2 className='leading-tight'>IT Intern, Intellisphere Data Solutions</h2>
                <p className='text-sm leading-tight font-thin'>
                  Jan 2024 - June 2024
                </p>
                <ul className='text-sm p-2'>
                  <li>Worked on several projects using Python and its libraries.</li>
                  <li>Projects include:</li>
                  <ul>
                    <li>Payroll Software</li>
                    <li>Loan Calculator</li>
                  </ul>
                </ul>
            </span>
            
          </div> 
          {/* class end */}
        
      </div>
    </div>
    </div>
  );
}

export default Experience;