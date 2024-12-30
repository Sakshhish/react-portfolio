import 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
            title = 'Heart Healthy' 
            main = 'This is a heart disease information guidance website with integrated chatbot assistance and realtime doctors are recommended based on the symptoms given by the patient.'
            />
            <ProjectCard 
            title = 'LunaSync Bot' 
            main = 'This is a video upload bot to a specific platform for given API key.'
            />
            <ProjectCard 
            title = 'Payroll Software' 
            main = 'This is python based software that analysis the final salary of employees of a company based on various factors.'
            />
        </div>
    </div>
  )
}

export default Projects
