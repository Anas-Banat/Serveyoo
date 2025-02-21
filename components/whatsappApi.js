'use client'; 
import React, { useState } from 'react';

// Component for individual fields
const Field = ({ name, type, value, handleChange }) => (
  <div className='mb-4 flex flex-col items-start'>
    <label className='ml-50% text-white text-lg font-medium mb-2'>{name}</label>
    <input
      type={type}
      name={name}
      placeholder={name}
      value={value}
      onChange={handleChange}
      className='w-72 px-4 py-2 rounded-md bg-white md:w-96'
      required
    />
  </div>
);

const WhatsAppApi = () => {
  // State management for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission and send WhatsApp message
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, phone, question } = formData;
    const message = encodeURIComponent(
      `Hello, my name is ${name}. My email is ${email} and my phone number is ${phone}. My question is: ${question}`
    );
    const phoneNumber = '1234567890'; // Replace with the WhatsApp number

    // Open WhatsApp with the prefilled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className='bg-blue-500 py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-semibold text-white mb-6 '>Contact Us</h2>
        <p className='text-lg text-gray-800 mb-8 px-4'>
          Have A Question? Leave It Below, We Will Get Back To You Soon
        </p>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <Field
            name="name"
            type="text"
            value={formData.name}
            handleChange={handleChange}
          />
          <Field
            name="email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
          />
          <Field
            name="phone"
            type="tel"
            value={formData.phone}
            handleChange={handleChange}
          />
          <div className='mb-4 flex flex-col items-start'>
            <label className='text-white text-lg font-medium mb-2'>
              Enter Your Question
            </label>
            <textarea
              name="question"
              rows='4'
              placeholder='Enter Your Question'
              value={formData.question}
              onChange={handleChange}
              className='w-72 px-4 py-2 rounded-md bg-white md:w-96'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='px-6 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default WhatsAppApi;
