import 'react';
import avatarImg from "../../assets/7358602-removebg-preview (1).png";

const Home = () => {
  return <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello there, Welcome to my portfolio.!</h1>
        <p className='text-sm md:text-2xl lt-tight'>
            I am Sakshi and I am a Software Developer with proficiency in programming languages
            such as Java, Python and JavaScript.
            Software Frameworks include: Flask, Expressjs and React.
        </p>
        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 
        hover:opacity-85 duration-300 hover:scale:105 font-semibold rounded-3xl bg-[#46569]'>Contact me</button>
      </div>
      <div><img className='w-2/5' src={avatarImg} alt="" /></div>
    </div>;  
}
export default Home;

