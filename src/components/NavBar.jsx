import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const NavBar = () => {

  const[nav, setNav]=useState(false)
const links=[
  {
    id:1,
    link:'home'
  },
  {
    id:2,
    link:'about'
  },
  {
    id:3,
    link:'portfolio'
  },
  {
    id:4,
    link:'experience'
  },
  {
    id:5,
    link:'contact'
  }
]
  return (
    <div name="navbar" className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
    <div>
    <h1 className="text-5xl ml-2">Debajyoti</h1>
    </div>
    <ul className="hidden md:flex">
    {links.map(({id,link})=>(
    <li key={id} className="text-1.9xl flex font-sans px-4 cursor-pointer font-medium text-gray-600 hover:scale-125 capitalize">
    <Link to={link} smooth duration={1000}>
    {link}
    </Link>
    </li>
    ))}
    </ul>
    <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
    {nav? <FaTimes size={30}/>:<FaBars size={30}/>}
    </div>
    {nav && (
    <ul className="font-serif flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800">
    {links.map(({id,link})=>(
      <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
      {link}
      </li>
      ))}
    </ul>
    )}
    </div>
  );
};

export default NavBar