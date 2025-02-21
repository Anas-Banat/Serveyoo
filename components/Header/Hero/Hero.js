import React from 'react'


const Hero = () => {
  return (
    <section className='relative text-white mx-0 '>
        <div className='container -mx-auto px-4 py-20 md:py-32'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl text-secondary font-bold mb-4'>Serveyoo</h1>
                    <p className='text-lg md:text-xl mb-6'>We are your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.</p>
                    <a href='/' className='bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition duration-300'>Book Now</a>
                </div>
                <div className='md:w-1/2 md:ml-20'>
                    <iframe 
                        className="w-full h-400 aspect-video md:aspect-square" 
                        src="https://www.youtube.com/embed/SVYXY9Angvs?si=s6t1qn7E2gpTQnk8"
                        allawfullscreen
                        title='Youtube video player'
                        typeof='iframe'
                        allow='accelerometer; muted; loopback; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'>
                    </iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero