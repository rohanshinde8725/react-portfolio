import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_8ygvle5",
      "template_op8rtij",  
      {
        from_name: user.name,
        from_email: user.email,
        subject: user.subject,
        message: user.message,
      },
      "IN1k7uANSjaDKZgKn"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");

      setUser({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section id='contact' className='w-full bg-black py-16 scroll-mt-24'>

      {/* Heading */}
      <div className='text-center text-white mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>Contact Me</h1>
        <h3 className='text-lg sm:text-xl font-semibold text-[#ed143d]'>
          Get In Touch
        </h3>
      </div>

      {/* Container */}
      <div className='max-w-6xl mx-auto px-5 sm:px-10'>

        <div className='flex flex-col md:flex-row gap-10'>

          {/* Left */}
          <div className='w-full md:w-1/2 text-white'>
            <h1 className='text-xl sm:text-2xl font-bold'>Get In Touch</h1>

            <p className='text-sm sm:text-base text-gray-300 mt-2'>
              You can contact me via email or social media platforms.
            </p>

            <div className='flex gap-4 mt-6'>
              <i className="ri-user-fill text-[#ed143d] text-xl sm:text-2xl"></i>
              <div>
                <h2 className='font-bold'>Name</h2>
                <p className='text-teal-400'>Rohan Shinde</p>
              </div>
            </div>

            <div className='flex gap-4 mt-4'>
              <i className="ri-mail-line text-[#ed143d] text-xl sm:text-2xl"></i>
              <div>
                <h2 className='font-bold'>Email</h2>
                <p className='text-teal-400 break-all'>
                  rohanshinde8725@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='w-full md:w-1/2'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  className='bg-white text-black w-full py-3 px-4 rounded outline-none'
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder='Full Name'
                  required
                />

                <input
                  className='bg-white text-black w-full py-3 px-4 rounded outline-none'
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder='Email Address'
                  required
                />
              </div>

              <input
                className='bg-white text-black w-full py-3 px-4 rounded outline-none'
                type="text"
                name="subject"
                value={user.subject}
                onChange={handleChange}
                placeholder='Your Subject'
              />

              <textarea
                className='bg-white text-black py-3 px-4 rounded outline-none'
                rows={4}
                name="message"
                value={user.message}
                onChange={handleChange}
                placeholder='Message'
              ></textarea>

              <button
                type="submit"
                className='mt-2 py-3 px-6 w-fit bg-black text-white font-semibold
                border-2 border-[#ed143d] rounded-md hover:bg-[#ed143d]
                transition duration-300'>
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact