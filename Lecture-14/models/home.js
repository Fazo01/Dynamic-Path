const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutils");

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
    Home.fetchAll((registeredHomes)=>{
      registeredHomes.push(this);
    const homeDataPath = path.join(rootDir,'data', 'home.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
      
    });
    })
  }

  //Read File
  static fetchAll(callback) {
    const homeDataPath=path.join(rootDir,'data','home.json')
    fs.readFile(homeDataPath,(err,data)=>{
      if(!err){
        callback(JSON.parse(data))
      }else{
      callback([]);
    }
    })
  }
};
