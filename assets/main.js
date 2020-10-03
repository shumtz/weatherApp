const searchBox = document.getElementById('input')
const cityName = document.getElementById('city')
const temp = document.getElementById('temp')
const maxTemp = document.getElementById('max')
const minTemp = document.getElementById('min')
const weather = document.getElementById('weather')

const URL = 'https://api.openweathermap.org/data/2.5/'
const KEY = '7d738284923b0d94731dbf571f735771'

searchBox.addEventListener('keypress', setKeyboard)

async function getWeather(query) {
  const response = await fetch(`${URL}weather?q=${query}&units=metric&appid=${KEY}`)
  const result = await response.json()
  cityName.innerHTML = `${result.name}, ${result.sys.country}`
  temp.innerHTML = `${Math.round(result.main.temp)} °C`
  maxTemp.innerHTML = `${Math.round(result.main.temp_max)} °C`
  minTemp.innerHTML = `${Math.round(result.main.temp_min)} °C`
  weather.innerHTML = `${result.weather[0].main}`
}

function setKeyboard(e) {
  if (e.keyCode == 13) {
    getWeather(searchBox.value)
  }
}