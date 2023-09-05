import React from 'react'
import self from '../assets/self2.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div>
                    <img className='rounded-full w-48 h-48 border-4 border-blue-400 hover:scale-105 duration-500' src={self} alt="HTML icon" />
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 pt-10 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Ayush, trust you're doing well. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building excellent software solutions that improve the lives of people around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips? Let's Connect!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About