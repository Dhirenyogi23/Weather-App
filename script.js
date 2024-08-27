
const apiKey = "5e8fe75717071433433587bd6b678cbe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {


    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);


    
    if(response.status === 404){
       let error = document.querySelector(".error");
       error.style.display = "block"
       error.style.color = "red"
       error.style.fontWeight = "600"

       document.querySelector(".weather").style.display = "none";

    }

    else{

    data = await response.json();
   
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "<sup>°</sup><sup>c</sup>";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png"
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"

    }

     
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = '';
})



