import React from 'react'

const Contact = () => {
  return (
    <div className='w-full bg-black py-25'>
        <div className='text-center text-white'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
            <h3 className='text-xl font-semibold text-[#ed143d]'>Get In Touch</h3>
        </div>

        <div className='w-[90%] mx-auto px-15 pt-20 flex'>
            <div className='w-1/2 text-white'>
                <h1 className='text-xl font-bold'>Get In Touch</h1>
                <h4 className='text-lg font-normal my-2'>You can contact me via email or social media platforms list below.</h4>
                <div className='flex gap-5 my-5'>
                    <div className='flex items-center'>
                        <i className="ri-user-fill text-[#ed143d] text-2xl"></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Name</h2>
                        <h3 className='text-xl text-teal-700'>Rohan Shinde</h3>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center'>
                        <i className="ri-mail-line text-[#ed143d] text-2xl"></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Email</h2>
                        <h3 className='text-xl text-teal-700'>rohanshinde8725@gmail.com</h3>
                    </div>
                </div>
            </div>


            <div className='w-1/2 flex flex-col justify-center'>
                <form className='w-full' action="">
                    <div className='flex gap-3'>

                        <input className='bg-white text-black w-1/2 py-3 px-5 rounded' 
                        type="text" placeholder='name' />

                        <input className='bg-white text-black w-1/2 py-3 px-5 rounded' 
                        type="email" placeholder='email' />

                    </div>

                    <div className='flex flex-col gap-5 mt-5'>
                        <input className='bg-white text-black w-full py-3 px-5 rounded' 
                        type="text" placeholder='Subject'/>
                        <textarea className='bg-white text-black py-3 px-5 rounded' 
                        name="" 
                        id=""
                        rows={4}
                        placeholder='Message'
                        ></textarea>
                    </div>

                    <button className='bg-black mt-5 py-2 px-10 rounded text-white font-semibold
                    border-2 border-[#ed143d] cursor-pointer hover:text-white hover:bg-[#ed143d] 
                    transition-all duration-300'>
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact