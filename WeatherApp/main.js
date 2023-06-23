const apiKey = "49d847483fde956020b00cf9e5ca3662";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbtn = document.querySelector('.cityname');
let city = '';
let waethericon = document.querySelector('.picture');

async function checkWeather(city)
{
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector('.city-name').innerHTML = data.name;
	document.querySelector('.weather-value').innerHTML = Math.round(data.main.temp) + '°c';
	document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
	document.querySelector('.speed').innerHTML = data.wind.speed + 'km/h';

	if(data.weather[0].main == "Clouds")
	{
		waethericon.src = "clouds.png"
	}else if(data.weather[0].main == "Clear")
	{
		waethericon.src = "clear.png"
	}else if(data.weather[0].main == "Rain")
	{
		waethericon.src = "rain.png"
	}else if(data.weather[0].main == "Mist")
	{
		waethericon.src = "mist.png"
	}else if(data.weather[0].main == "Drizzle")
	{
		waethericon.src = "drizzle.png"
	}
}

let weatherstatus = document.querySelector('.status');
function search()
{
	city = searchbtn.value;
	checkWeather(city);
	weatherstatus.style.display = 'inherit';

}


