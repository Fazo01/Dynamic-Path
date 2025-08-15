const Favourite = require("../models/favourites");
const Home = require("../models/home");
const registeredHome = [];
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/index", {
      pageTitle: "airbnb",
      registeredHome: registeredHome,
      currentPage: "Index",
    });
  });
};
exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/home-list", {
      pageTitle: "Home List",
      registeredHome: registeredHome,
      currentPage: "Home",
    });
  });
};
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/bookings", {
      pageTitle: "My bookings",
      registeredHome: registeredHome,
      currentPage: "bookings",
    });
  });
};
exports.getFavourite = (req, res, next) => {
  Favourite.getfavourite((favourites)=>{
  Home.fetchAll((registeredHome) => {
    const favouriteHome=registeredHome.filter(home=>
      favourites.includes(home.id))
    res.render("store/favourite-list", {
      pageTitle: "My favourite",
      favouriteHome: favouriteHome,
      currentPage: "favourite",
    });
  });
  })
};


exports.postAddToFavourite=(req,res,next)=>{
  console.log("Came to add :",req.body)
  Favourite.addfavourite(req.body.id,error=>{
    if(error){
      console.log("Error while making favourite")
    }else{
      res.redirect("/favourite")
    }
  })
}


exports.getHomedetails = (req, res, next) => {
  const homeId=req.params.homeId
  console.log("Home Id ",homeId)
  Home.findById(homeId,home=>{
    if(!home){
      res.redirect("/homes")
    }else{   
      res.render("store/home-detail", {
        home:home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  })
};
exports.registeredHome = registeredHome;
