import React, { useState, useEffect } from 'react'
function WeatherApp() {
    const [data, setData] = useState({})
    const [Location, setLocation] = useState('')
    const [currentTime, setCurrentTime] = useState(new Date())
    const Api_Key = '4c7e3f5aa7b54a209ae46a3b61a082ac'
    const handleInputChange = (e) => {
        setLocation(e.target.value)
    }
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000); // update every second
      
        return () => clearInterval(interval);
      }, []);
      
      const getCurrentDate = () => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return currentTime.toLocaleDateString('en-US', options);
      };
      
      const getCurrentTime = () => {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        return currentTime.toLocaleTimeString('en-US', options);
      };
      
      const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) {
          return "Good Morning";
        } else if (hour >= 12 && hour < 17) {
          return "Good Afternoon";
        } else if (hour >= 17 && hour < 20) {
          return "Good Evening";
        } else {
          return "Good Night";
        }
      };
    useEffect(() => {
        const fetchData = async () => {
            const defaultCity = 'New Delhi'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${Api_Key}&units=Metric`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }
    , [])
    const search = async() => {
        if (Location.trim() !== '') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${Api_Key}&units=Metric`
        const res = await fetch(url)
        const searchData = await res.json()
        console.log(searchData)
        setData(searchData)
        setLocation('')
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search()
        }
    }
    
    
  return (
    <div className='container'>
        <div className='weather-app'>
            <div className='search'>
                <div className='search-top'>
                    <i className='fa-solid fa-location-dot'></i>
                    <div className='location'>{data.name}</div>
                </div>
                <div className='search-bar'>
                    <input 
                    type="text" 
                    placeholder='Search for a city' 
                    value={Location} 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} 
                    />
                    <i className='fa-solid fa-magnifying-glass' onClick={search}></i>
                </div>
            </div>
            <div className='weather'>
                {/* <img src={sunny} alt="weather" /> */}
                <div className='weather-type'>
                    {data.weather ? data.weather[0].main : null}
                </div>
                <div className='temp'>
                    {data.main ?`${Math.floor(data.main.temp)}°C`:null}
                </div>
            </div>
            <div className='weather-date'>
                <p>{getCurrentDate()} - {getCurrentTime()}</p>
                <p>{getGreeting()}</p>
            </div>
            <div className='weather-data'>
                <div className='humidity'>
                    <div className='data-name'>Humidity</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className='data'>
                        {data.main ? data.main.humidity : null}%
                    </div>
                </div>
                <div className='wind'>
                    <div className='data-name'>Wind</div>
                    <i className='fa-solid fa-wind'></i>
                    <div className='data'>
                        {data.wind ? Math.floor(data.wind.speed) : null} km/h
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp