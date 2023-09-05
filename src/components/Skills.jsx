import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Firebase from '../assets/firebase.png'
import TailWind from '../assets/tailwind.png'
import Flutter from '../assets/flutter.png'
import Cpp from '../assets/c++.png'
import C from '../assets/c.png'
import Python from '../assets/python.png'
import SQL from '../assets/sql.png'
import Dart from '../assets/dart.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='h-32 sm:h-0'></div>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pt-96 sm:pt-0'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={ReactImg} alt="ReactImg icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={Flutter} alt="Flutter icon"/>
                    <p className='my-4'>Flutter</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={Firebase} alt="Firebase icon"/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={TailWind} alt="TailWind icon"/>
                    <p className='my-4'>TailWind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={Dart} alt="Dart icon"/>
                    <p className='my-4'>Dart</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mb-3 mt-5 scale-125' src={Cpp} alt="TailWind icon"/>
                    <p className='mb-4 mt-3'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='h-16 mx-auto mt-7 scale-150' src={C} alt="TailWind icon"/>
                    <p className='mt-5'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={Python} alt="TailWind icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4 scale-110' src={SQL} alt="TailWind icon"/>
                    <p className='my-4'>SQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills