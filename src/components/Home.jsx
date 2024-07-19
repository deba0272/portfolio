import img from '../assets/port/personal_image.jpeg'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from 'react-scroll'
const Home = () => {
    
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-slate-900 to-gray-700 text-white">
    
    <div className="font-serif max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full">
    <h2 className="text-4xl sm:text-7xl font-bold text-white">
    I am an Aspiring Software Developer
    </h2>
    <p className="text-gray-500 py-4 max-w-md">
    I am an enthusiastic software developer passionate about building web applications and solving problems through code. Currently, I am focused on learning MERN stack development and working on various backend projects.I am actively seeking opportunities to work on real-world projects to further enhance my skills. Lets connect and create something impactful together!
    </p>
    <div>
    <Link to="portfolio" smooth duration={1000} className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-orange-400 to-slate-600 cursor-pointer">
    Portfolio
    <span className="group-hover:rotate-90 duration-300 px-1">
    <FaArrowRightFromBracket size={25}
    className="ml-1"/>
    </span>
    </Link>
    </div>
    </div>
    <div>
    <img src={img} alt="my-profile" className="rounded-3xl mx-auto w-3/3 md:w-full"/>
    </div>
    </div>
    </div>
  )
}

export default Home