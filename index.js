const apiKey='87a7ccd64a9e4708e7e226211494a4a6';
const apiUrl='http://api.openweathermap.org/data/2.5/weather';

document.getElementById("submit").addEventListener('click',() =>{
const city=document.getElementById("city").value;
if(city==''){
  return alert("Enter city name");
}
else{
  fetchWeather(city);
}
    
});

function fetchWeather(city){
    const Url=`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    fetch(Url).then(response => response.json()).then(data => {
            document.getElementById("location").innerHTML=`<h2>Location:<h2>${data.name}`;
            document.getElementById("temperature").innerHTML=`<p>Temperature:${Math.round(data.main.temp)}°C</p>`;
            document.getElementById("description").innerHTML=`<p>Description:${data.weather[0].description}</p>`;
            document.getElementById("humidity").innerHTML=`<p>Humidity:${data.main.humidity}%</p>`;
            document.getElementById("wind").innerHTML=`<p>Wind Speed:${data.wind.speed}km/h</p>`;
            
          })
          .catch(error =>{
            console.error("Error in fetching weather data",error);
      });
}
