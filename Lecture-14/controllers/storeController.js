const Favourite = require("../models/favourite");
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
   Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        })
      });
    })
  }

exports.postAddToFavourite=(req,res,next)=>{
  console.log("Came to add to Favourite",req.body)
  Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log("Error while marking favourite")
    }
    res.redirect('/favourites')
  })
}
// exports.registeredHomes = registeredHomes;

exports.getHomeDetails = (req, res, next) => {//Adding module
  const homeId=req.params.homeId;//to directly used all variable
  Home.findById(homeId,home=>{//
    if(!home){
      console.log("home not found")
      return res.redirect("/homes")
    }else{
      res.render("store/home-detail", {
        home:home,
      pageTitle: "Home Detail",
      currentPage: "Home",
      }) 
    }
    })
};