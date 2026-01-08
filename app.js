const api = "https://api.weatherapi.com/v1/current.json?key=7fd42d84a2a64ea4920164525260301&q=London&aqi=yes"
const apikey = "b825b38693f2c69364eccf127185a873"

const form = document.querySelector("#waseem")
const div = document.querySelector("#div")
const input = document.querySelector("#input")

const cities = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input.value);

    fetch(`https://api.weatherapi.com/v1/current.json?key=c69ca77ab75a4398bdc165810260301&q=${input.value}&aqi=no`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            cities.unshift(res)
             renderCities();
      input.value = "";
        })
        .catch((err) => {
            console.error(err);

        })
})
function renderCities() {
  div.innerHTML = "";

  for (let i = 0; i < cities.length; i++) {
    div.innerHTML+= `<div class="card-left">
          <div class="city">${cities[i].location.name}</div>
          <div class="date">
            ${cities[i].location.localtime}, ${cities[i].location.country}
          </div>
          <div class="temp">${cities[i].current.temp_c}°C</div>
          <div class="condition">${cities[i].current.condition.text}</div>
        </div>

        <div class="card-right">
          <img src="https:${cities[i].current.condition.icon}" alt="icon">
        </div>`
  }


}