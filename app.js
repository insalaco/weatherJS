// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.zipcode);

// init ui object
const ui = new UI();

// when the DOM loads call getWeather function
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const zipcode = document.getElementById('zip').value;
 
  weather.changeLocation(zipcode);
  
  // get and display weather  
  storage.setLocationData(zipcode);

  // call getWeather function below
  getWeather();

  // close modal using jQuery
  $('#locModal').modal('hide');
});


function getWeather() {
  // calls the getWeather method in the Weather class
  // returns promise because of async so need to use .then()
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
