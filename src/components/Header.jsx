import React from 'react'

const Header = () => {

  // Fetch image function 


  return (
    <div className='header'>
      
      {/* TODO: replace with portfolio image */}
      <img src="https://placehold.co/400x600" alt="Logo" className='logo' />

      <section className='header-content'>
        <h1 className='header-title'>Katelyn Mehner</h1>
        <p className='header-subtitle'>Software Engineer</p>
        <p className='header-description'>I am a software engineer with a passion for creating innovative solutions. I love to learn and grow in my field, and I am always looking for new challenges.</p>
      </section>


    </div>
  )
}

export default Header