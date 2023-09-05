import React from 'react'

import blithapp from '../assets/projects/blithapp2.png'
import portfolio from '../assets/projects/portfolio2.png'
import simulator from '../assets/projects/simulator.png'
import gamebot from '../assets/projects/gamebot.png'
import sentimentana from '../assets/projects/sentimentana.PNG'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='h-56 sm:h-0'></div>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 pt-96 sm:pt-0'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Work</p>
                    <p className='py-6'>Check out some of my recent Projects</p>
                </div>

                {/* Grid Continer */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${blithapp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 px-2 justify-center items-center'>
                            <span className='text-2xl px-7 font-bold text-white tracking-wider justify-center items-center'>
                                College-Fest
                            </span>
                            <div></div>
                            <span className='text-2xl font-bold text-white tracking-wider justify-center items-center'>
                                Mobile Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://play.google.com/store/apps/details?id=com.iitgnapp.blithchron'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Play Store
                                    </button>
                                </a>
                                <a href='https://github.com/ayushmodi12/Blith_App'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${simulator})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                SDLX Processor
                            </span>
                            <div></div>
                            <span className='text-2xl px-10 font-bold text-white tracking-wider'>
                                Simulator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayushmodi12/SDLX-Simulator'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${gamebot})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl px-6 font-bold text-white tracking-wider'>
                                Self-Playing
                            </span>
                            <div></div>
                            <span className='text-2xl px-8 font-bold text-white tracking-wider'>
                                Game Bot
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayushmodi12/PianoTilesGameBot'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${sentimentana})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Sentiment Analysis
                            </span>
                            <div></div>
                            <span className='text-2xl px-3 font-bold text-white tracking-wider'>
                                & EDA on Reddit
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashKetchum0206/NLP-Assignment-1'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${portfolio})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portfolio Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ayushmodi12/portfolio-website'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work