
// Activity 2: Fetching Weather Data
// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.


let API_key = "9b2ca8df849188e137724f8f8ce3dad8"
let city_name = "Mumbai"
console.log("sa",API_key,city_name)
const currentweather = async function (name) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_key}`)
        let data = await response.json()
        console.log("Data", data)
        let currTemp = document.getElementsByClassName('temperature')
        let weathCondition = document.getElementsByClassName('weathCondition')
        let cityName = document.getElementsByClassName('cityName')
        currTemp[0].innerHTML = data.main.temp
        weathCondition[0].innerHTML = data.weather[0].main
        cityName[0].innerHTML = data.name

        return data
    } catch (error) {
        console.log("Error:", error)
    }
}

currentweather(city_name)


// Activity 3: Adding Search Functionality
// Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.




let submit = document.getElementById("mform")
submit.addEventListener("submit", async (eve) => {
    eve.preventDefault()
    let forecast = document.getElementById("fiveDayData")
    forecast.innerHTML = '';
    let name = document.getElementById("search").value
    let data = await currentweather(name)
    lat = data.coord.lat
    lon = data.coord.lon
    console.log("lat", lat, lon)
    fiveDayForeCast(lat, lon, name)
})

// Activity 4: Displaying a 5-Day Forecast
// Task 7: Use the fetch API to get a 5-day weather forecast from the public weather API. Log the response data to the console.

let fiveDayForeCast = async function (lat, lon, name) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`)
        let data = await response.json()
        const uniqueForecast = [];
        const fivedays = data.list.filter(forecast => {
            const date = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecast.includes(date)) {
                return uniqueForecast.push(date)
            }
        })
        console.log("Data for forecast", data)
        let forecast = document.getElementById("fiveDayData")
        console.log("five", fivedays)
        for (const five of fivedays) {
            let divP = document.createElement('div')
            divP.className = 'forecastC'

            let divT = document.createElement('div')
            divT.className = 'temperature'
            divT.innerHTML = five.main.temp

            let divW = document.createElement('div')
            divW.className = 'weathCondition'
            divW.innerHTML = five.weather[0].main


            let divC = document.createElement('div')
            divC.className = 'cityName'
            divC.innerHTML = name


            let divD = document.createElement('div')
            divD.className = 'cityDate'
            divD.innerHTML = new Date(five.dt_txt).toDateString()

            // Activity 5: Enhancing the UI
            // Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.


            let img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`; 
            img.alt = 'weather-icon';
            img.className = 'weather-icon'; 

            divP.appendChild(img)
            divP.appendChild(divT);
            divP.appendChild(divW);
            divP.appendChild(divC);
            divP.appendChild(divD);

            forecast.appendChild(divP);


        }
    } catch (error) {
        console.log("Error:", error)
    }
}

// Activity 5: Enhancing the UI
// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.
// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.
