import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-cyan-400 font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Ayush Modi</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-blue-300'>I'm a Web/App Developer</h2>
                <p className='text-blue-100 py-4 max-w-[900px]'>& Machine Learning Enthusiast; Graduating from IIT Gandhinagar with a degree in Computer Science and Engineering.</p>
                <div>
                    {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span> */}
                    <Link className='w-40 text-white group border-2 px-6 py-3 my-2 flex items-center hover:cursor-pointer hover:bg-yellow-600 hover:border-yellow-600' to='work' smooth={true} duration={500}>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
}

export default Home