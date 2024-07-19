const Contact = () => {
  return (
    <div name="contact" className="font-serif w-full h-screen bg-gradient-to-b  from-gray-900 via-slate-700 to-gray-900 p-4 text-white">
    <div className='flex flex-col p-4 justify-centermax-w-screen mx-auto h-full'>
    <div className="pb-8">
    <p className="text-4xl font-bold inline border-b-4 border-l-gray-500">Contact</p>
    <p className="py-6 text-2xl">Lets Connect for better development</p>
    </div>
    <div className="flex justify-center items-center">
    <form action="https://getform.io/f/amdpmznb" method="POST" className="flex flex-col w-full md:w-1/2">
    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
    <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
    <textarea name="enter your message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
    <button type="submit" className="font-serif p-2 bg-gradient-to-b from-cyan-500 to-blue-500 border-2 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white focus:outline-none">Lets talk</button>  
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact