import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/00be773c-f54b-4616-808f-1851b2b887f3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pt-20 sm:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>
                    Submit the form below or shoot me an email - ayushtmodi@gmail.com
                </p>
            </div>
            <input className='p-2 bg-[#e6e8f3]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#e6e8f3]' type='email' placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#e6e8f3]' name='message' rows="10" placeholder='Message'>
            </textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact