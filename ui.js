class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.temp = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.humidity.textContent = `humidity: ${weather.main.humidity} K`;
    this.temp.textContent = `temp: ${weather.main.temp} K`;
  }
}