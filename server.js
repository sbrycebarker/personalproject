const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-Parser'),
      nassive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      config = require('.config.js'),
      cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret: 'this'
}))


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

const massivInstance = massive.connectSync({connnectionString: 'postgres://postgres:1234a@localhost/massive_demo'})

app.set('db', massivInstance);

const db = app.get('db')

passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
},

function(accessToken, refreshToken, extraParams, profile, done) {

    db.getUserByAuthId([profile.id], function(err, user) {
      user = user[0];
      if (!user) {
        console.log('CREATING USER');
        db.creatUserByAuth([profile.displayName, profile.id], funcition(err, user) {
          console.log(err)
          console.log('USER CREATED', userA);
          return done(err, user[0]);
        })
      } else {
        console.log('FOUND USER', user);
        return done(err, user)
      }
    })
}
));


passport.serializeUser(function(userA, done) {
  console.log('serializing' , userA);
  var userB = UserA;

  done(null, userB)
});

passport.deserializeUser(function(userB, done) {
  var userC = userC;

  done(null, userB);
})

app.get('/auth', passport.authenticate('auth0'));

app.get('./auth/callback' ,
  passport.authenticate('auth0', {successRedirect: '/'}, function(req, res) {)
  res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  if(!req.user) return res.sendStatus(404);

  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/')
})

app.listen(3030 , function() {
  console.log("connnected on port 3030")
})
