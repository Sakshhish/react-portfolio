import React from 'react'
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {FaGit, FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>
                Contact
            </h1>
            <h3 className='text-sm md:text-2xl font-normal'>Reach out!</h3>
        </div>

        <ul className='text-sm md:text-xl'>
            <li>
                <MdOutlineEmail size={20}/>
                sakshi.sharma219213@gmail.com
            </li>
            <li>
                <CiLinkedin size={20}/>
                linkedin.com/sakshi-sharma-
            </li>
            <li>
                <FaGithub size={20}/>
                github.com/Sakshhish
            </li>
            


        </ul>
    </div>
  )
}

export default Footer
