// init weather object
const weather = new Weather('17403');
const ui = new UI();

// when the DOM loads call getWeather function
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  // call the getWeather method in the Weather class
  // returns promise because of async so need to use .then()
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
