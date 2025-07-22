const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutils");

const homeDataPath = path.join(rootDir, "data", "home.json");
//Fake database
let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }
  //To save Files
  save() {
    //Write File

    Home.fetchAll((registeredHomes) => {
      if(this.id){//edit home case
        registeredHomes=registeredHomes.map(home=>
           home.id===this.id?this:home)
        
      }else{
            this.id = Math.random().toString();
            registeredHomes.push(this);
      }

      fs.writeFile(
        homeDataPath,
        JSON.stringify(registeredHomes),
        (error) => {}
      );
    });
  }

  //Read File
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "home.json");
    fs.readFile(homeDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
  static findById(homeId, callback) {
    //I will study this
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId); //find method
      callback(homeFound);
    });
  }
};
