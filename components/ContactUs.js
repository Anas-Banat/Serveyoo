import React from 'react'

const Field = ({name, type}) => (
  <div className='mb-4 flex flex-col items-start '>
    <label className='ml-50% text-white text-lg font-medium mb-2'>{name}</label>
      <input type={type} placeholder={name} className='w-72 px-4 py-2 rounded-md bg-white md:w-96' />
    </div>
);
const ContactUs = () => {
  return (
    <section className='bg-blue-500 py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-semibold text-white mb-6 '>Contact Us</h2>
        <p className='text-lg text-gray-800 mb-8 px-4'>Have A Question? Leave It Below, We Will Get Back To You Soon</p>
        <form className='  flex flex-col items-center'>
          <Field 
            name="Your Name"
            type="text"
          />
          <Field 
            name='Your Email'
            type='email'
          />
          <Field 
            name='Your Phone'
            type='phone'
          />
          <div className='mb-4 flex flex-col items-start'>
            <label 
              className=' text-white text-lg font-medium mb-2 '>Your Message
            </label>
            <textarea 
              rows='4'
              placeholder='Your Message'
              className='w-72 px-4 py-2 rounded-md bg-white md:w-96'>
            </textarea>
          </div>
            <button 
              className='px-6 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300'>
              Submit
            </button>
          </form>
      </div>
    </section> 
  )
}

export default ContactUs