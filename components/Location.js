import React from "react";

const Location = () => { 
    return (
    <section className='py-7 relative overflow-hidden'>
        <div className='container mx-auto text-center relative z-10'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.971212930815!2d35.94907107530365!3d31.98794262389305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b614536be6ce3%3A0x1f98cea31dc6d6d0!2sPanorama%20Car%20Care!5e1!3m2!1sen!2sjo!4v1729028966447!5m2!1sen!2sjo" 
            width="100%" 
            height="600"
            style={{border:0}} 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </section>
    )
}

export default Location