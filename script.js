// const getWeather = async()=>{
//     const weather = await axios.get ('http://api.weatherapi.com/v1/current.json?key=a6edc5efdca8441f8eb163652242609&q=paris&aqi=no')
//    console.log(weather)
// }

// getWeather()

let cityName = document.querySelector("#cityName");
let cityTemp = document.querySelector("#temp");
let weatherIcon = document.querySelector("#weather-icon");
let weatherText = document.querySelector("#condition-text");
//setters
let button = document.querySelector("#submitButton");
const apiKey = "a6edc5efdca8441f8eb163652242609";

button.addEventListener("click", async () => {
  const input = document.querySelector("#textInput").value;

  let response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
  );

  let weather = response.data.current.temp_c;
  let place = response.data.location.name;
  let region = response.data.location.region;
  let country = response.data.location.country;
  const conditionText = response.data.current.condition.text;
  const imageUrl = response.data.current.condition.icon;

  cityName.innerText = `${place} ${region}, ${country}`;
  cityTemp.innerText = `${weather}°C`;
  weatherText.innerText = `${conditionText}`;
  weatherIcon.setAttribute("src", imageUrl);
  console.log(response.data);
});
