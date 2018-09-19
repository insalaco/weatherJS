class Weather {
  constructor(zip) {
    this.apiKey = '';
    this.zip = zip;
  }

  // fetch api
  async getWeather() {
    // assign variable 'response' equal to api url
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.apiKey}`);

    const responseData = await response.json();
    
    // returns weather object from resonse data
    return responseData;

  }
}