
document.getElementById('error-msg').style.display='block'//Error Msg

const loadWeatherToday=()=>{
   const apiKey ="6c1b0cfcfad1378022e1d8b1fbe34f87"
   const weatherSearchArea=document.getElementById("weather-search-areya");
   const searchAreaName= weatherSearchArea.value
   const url= `http://api.openweathermap.org/data/2.5/weather?q=${searchAreaName}&units=metric&appid=${apiKey}`
   fetch(url)
   .then(response => response.json())
   .then(data =>displayWeatherStatus(data))
   // .catch(err=>alert(err))
}
loadWeatherToday()
const displayWeatherStatus= weathers=>{
   // console.log(weathers)
   const weatherUpdates = document.getElementById("weather-update");
   weatherUpdates.textContent=''
   if(weatherUpdates==undefined){
      document.getElementById('error-msg').style.display='none'
   }
   const div=document.createElement('div')
   // div.classList.add('card')
   div.innerHTML=`
   <img class='w-25 mx-auto' src='https://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png'>
     <h5 class="card-title">City: ${weathers.name} </h5>
     <p class="card-text">Temprature: ${weathers.main.temp}°C</p>
     <p class="card-text">Feels Like :${weathers.main.feels_like}°C</p>`
   weatherUpdates.appendChild(div)
}