class Storage {
  constructor() {
    this.zipcode;
    this.defaultZip = '02171';
  }

  getLocationData() {
    if(localStorage.getItem('zipcode') === null) {
      this.zipcode = this.defaultZip;
    } else {
      this.zipcode = localStorage.getItem('zipcode');
    }
    
    return {
      zipcode: this.zipcode
    }
  }

  setLocationData(zipcode) {
    localStorage.setItem('zipcode', zipcode);
  }
}