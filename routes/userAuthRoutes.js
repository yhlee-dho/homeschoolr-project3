const db = require("../models/");
const passport = require("../config/passport");
const router = require("express").Router();
// const userController = require("../controllers/userauthController");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the app
  router.post("/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  })

  // sign up user
  // if the user is created successfully, proceed to log the user in, otherwise send back an error
  router.post("/register", function(req, res) {
    db.User.create(req.body)
      .then(function() {
        //if the user object has been created, send back affirmative response
        //in react, user should be redirected to login, or passed straight through to the app
        //for now, send back created user object
        res.json({success: true});
        
        //*testing* sends back created object
        // res.json(data);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("api/logout", function(req, res) {
    req.logout();
    // res.redirect("/");
  });

  // still need this particular route? will need to be checking this when going from page to page in react itself. check against isloggedin 
  router.get("/userinfo", function(req, res) {

    //req user is created once the user logs in and creates a session 
    //if this has not been created (because it does not exist)
    
    if (!req.user) {
      // send back an empty object/no data
      res.json({});
    } else {

      // otherwise, send back the email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

module.exports = router; 