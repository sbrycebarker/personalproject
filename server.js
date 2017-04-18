const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      config = require('./config.js'),
      cors = require('cors');

//ECONNREFUSED 127.0.0.1:5432  ????

const app = express();

app.use(bodyParser.json());
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret: 'things'
}))


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

const massiveInstance = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/personalproject'})
// 1234a password
app.set('db', massiveInstance);
const db = app.get('db');


passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
},

function(accessToken, refreshToken, extraParams, profile, done) {
  //Find user in database
  db.getUserByAuthId([profile.id], function(err, user) {
    user = user[0];
    if (!user) {
      console.log('CREATING USER');
      db.createUserByAuth([profile.displayName, profile.id], function(err, user) {
        console.log(err)
        console.log('USER CREATED', userA);
        return done(err, user[0]);
      })
    } else {
      console.log('FOUND USER', user);
      return done(err, user);
    }
  })
}
));


passport.serializeUser(function(userA, done) {
  console.log('serializing' , userA);
  var userB = userA;

  done(null, userB)
});

passport.deserializeUser(function(userB, done) {
  var userC = userC;

  done(null, userB);
});

app.get('/auth', passport.authenticate('auth0'));

//**************************//
//To force specific provider://
//**************************//
// app.get('/login/google',
//   passport.authenticate('auth0', {connection: 'google-oauth2'}), function (req, res) {
//   res.redirect("/");
// });

app.get('/auth/callback' ,
  passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
  res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  // if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})


app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/')
})

app.get("/users/self/media/recent" , function(req, res) {
  accessToken: "37620940.8ccf638.96228796bf934c5fbf17c8a2394e2a88"
  clientID: "	8ccf63887ee24df6abe7098f4e7cb65d"
})

app.listen(3000 , function() {
  console.log("connnected to port 3000")
})
