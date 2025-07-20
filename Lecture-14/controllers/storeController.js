const Home = require("../models/home"); //Adding Module

exports.getIndex = (req, res, next) => {//Adding module
  Home.fetchAll((registeredHomes)=>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "index",
    }) //Important to change in partial
  );
};

exports.gethome = (req, res, next) => {//Adding module
  Home.fetchAll((registeredHomes)=>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    }) //Important to change in partial
  );
};

exports.getBookings=(req, res, next) => {
    res.render("store/bookings", {
      pageTitle: "My bookings",
      currentPage: "bookings",
    })
};
exports.getFavouriteList=(req, res, next) => {
    Home.fetchAll((registeredHomes)=>
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Favourite List",
      currentPage: "favourite",
    }) //Important to change in partial
  );
  }
// exports.registeredHomes = registeredHomes;
