const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weather_box=document.querySelector('.weather-box');
const weather_details=document.querySelector('.weather-details');
search.addEventListener('click',()=>{
    const API='738762fc89dd2ef964f49a29a4e51b4f';
   const city=document.querySelector('.search-box input').value;
   if(city=='')
   return;
   console.log(city);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`)
   .then (response=>response.json())
   .then((json)=>{
    const img=document.querySelector('.weather-box img');
   const description=document.querySelector('.weather-box .description');

   const temperature=document.querySelector('.weather-box .temperature');
   const humidity=document.querySelector('.weather-details .humidity span');
   const wind =document.querySelector('.weather-details .wind span');
   switch(json.weather[0].main)
   {
        case 'Clear':
        img.src='transparent-weather-11.png'
        break;
        case 'Rain':
        img.src='rain.png'
        break;
        case 'Snow':
        img.src='snow.png'
        break;
        case 'Mist':
        img.src='mist.png'
        break;
        default:
        img.src='mist.png';
        
   }
   temperature.innerHTML=`${parseInt(json.main.temp)}<span>&#8451</span>`;
   humidity.innerHTML=`${parseInt(json.main.humidity)}<span>&#8451</span>`;
   wind.innerHTML=`${parseInt(json.wind.speed)}<span>km/h</span>`;
   description.innerHTML=`${json.weather[0].description}`;
   })
}) 




