import { FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
const SocialLinks = () => {

const links=[
    {
        id:1,
        child:(
            <>
             LinkedIn<FaLinkedin size={35}/>
            </>
        ),
        href:'https://www.linkedin.com/in/debajyoti-roy-a1a7bb230/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
             GitHub<FaGithub size={35}/>
            </>
        ),
        href:'https://github.com/deba0272'
    },
    {
        id:3,
        child:(
            <>
         EMail<HiOutlineMail size={35}/>
            </>
        ),
        href:'mailto:debajyotiece@gmail.com'
    },
    {
        id:4,
        child:(
            <>
             Resume<BsFillPersonFill size={35}/>
            </>
        ),
        href:'/deba.pdf',
        style:"rounded-br-md",
        download: true
    }
]

  return (
    <div name="sociallinks" className="hidden lg:flex flex-col top-[35%] left-0 fixed">
     <ul>

     {links.map(({id,child,href,style,download})=>(
        <li key ={id}className={"font-serif flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration 300 bg-slate-600" + " " +style}>
        <a href={href} className="flex justify-between items-center text-white w-full"
        download={download}
        target='_blank'   
        rel="noopener noreferrer"
        >
        {child}

        </a>
        </li>
     ))}
</ul>
    </div>
  )
}

export default SocialLinks