// init weather object
const weather = new Weather('17403');

// call the getWeather method from the Weather class
// returns promise so need to use .then()
weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));