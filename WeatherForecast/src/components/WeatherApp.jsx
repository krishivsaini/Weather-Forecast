import React from 'react'
// import sunny from '../assets/sunny.png'
// import rainy from '../assets/rainy.png'
// import cloudy from '../assets/cloudy.png'
// import snowy from '../assets/snowy.png'
function WeatherApp() {
  return (
    <div className='container'>
        <div className='waether-app'>
            <div className='search'>
                <div className='search-top'>
                    <i className='fa-solid fa-location-dot'></i>
                    <div className='location'>New Delhi</div>
                </div>
                <div className='search-bar'>
                    <input type="text" placeholder='Search for a city' />
                    <i className='fa-solid fa-magnifying-glass'></i>
                </div>
            </div>
            <div className='weather'>
                {/* <img src={sunny} alt="weather" /> */}
                <div className='weather-type'>clear</div>
                <div className='temp'>28</div>
            </div>
            <div className='weather-date'>
                <p>Fri, 3 May</p>
            </div>
            <div className='weather-data'>
                <div className='humidity'>
                    <div className='data-name'>Humidity</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className='data'>60%</div>
                </div>
                <div className='wind'>
                    <div className='data-name'>Wind</div>
                    <i className='fa-solid fa-wind'></i>
                    <div className='data'>10 km/h</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp