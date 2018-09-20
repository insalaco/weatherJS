class Weather {
  constructor(zipcode) {
    this.apiKey = '';
    this.zipcode = zipcode;
  }

  // fetch api
  async getWeather() {
    // assign variable 'response' equal to api url
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&appid=${this.apiKey}`);

    const responseData = await response.json();
    
    // returns weather object in JSON from resonseData above
    return responseData;

  }
}