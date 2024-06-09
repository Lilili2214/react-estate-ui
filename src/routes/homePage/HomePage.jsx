import React from 'react'
import './homePage.scss'
function HomePage() {
  return (
    <div className='homePage'>
        <div className='textContainer'>
            <div className="wrapper">
            <h1>Find Real Estate & Get Your Dream Place</h1>
            <p>Welcome to our real estate platform! Whether you're looking to rent or buy, we've curated a diverse selection of properties to suit every lifestyle. With intuitive search filters and detailed listings, finding your dream home has never been easier. Start your search today and turn your real estate aspirations into reality!</p>
            </div>
            
        </div>
        <div className='imgContainer'>
            <img src='/bg.png' alt=''/>
        </div>
    </div>
  )
}

export default HomePage