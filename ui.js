class UI {
  constructor() {
    this.temp = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
  }

  paint(weather) {
    this.humidity.textContent = 'humidity: ' + weather.main.humidity;
    this.temp.textContent = 'temp: ' + weather.main.temp
  }
}