import React from 'react'

const Form = () => {
  return (
    <div className='text-gray-200 lg:w-[1280px] md:w-[730px] smmd:w-[360px] sm:w-[350px] xs:w-[300px] mx-auto sansation-regular'>
        <div className='h-[500px] md:w-[400px] sm:w-[300px] bg-gray-900/50 rounded-xl'>
            <div className='p-5'>
                <h1 className='text-4xl sm:text-2xl'>Send me a message</h1>
                <p className='pt-5  sm:text-xs md:text-sm w-[100%]'>I'm always interested in new opportunities, whether it's a full-time position, freelance project, or just a chat about technology.</p>
                <form className='pt-10 flex flex-col gap-8'>
                    <div className='flex gap-16 items-center'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className='sm:w-[150px] md:w-[200px] border-b border-gray-400 focus:outline-none' placeholder='Enter your name' />
                    </div>
                    <div className='flex gap-16 items-center'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='sm:w-[150px] md:w-[200px] border-b border-gray-400 focus:outline-none' placeholder='Enter your email' />
                    </div>
                    <div className='flex gap-10 items-center'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" className='md:w-[200px] sm:w-[150px] border-b border-gray-400 focus:outline-none text-balance ' placeholder='Enter your message'></textarea>
                    </div>
                    <button className='border border-white h-[35px] rounded text-center items-center cursor-pointer hover:bg-white hover:text-black'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form