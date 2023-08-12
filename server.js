const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session'); // Import cookie-session
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view-engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'default-secret'], // Use a secure secret key
    maxAge: 24 * 60 * 60 * 1000, // 1 day (adjust as needed)
    secure: true, // Set to true when using HTTPS
    httpOnly: true,
    sameSite: 'strict', // Recommended for security
  })
);

// In-memory user storage, replace this with a database

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    const user = users.find(user => user.email === email);

    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        return done(error);
      }
      if (!result) {
        return done(null, false, { message: 'Password incorrect' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    };
    users.push(newUser);
    req.session.user = newUser; // Set user data in the session
    res.redirect("/");
  } catch (error) {
    console.error('Error during registration:', error);
    res.redirect('/register');
  }
});

app.delete("/logout", (req, res) => {
  req.session = null; // Clear the session
  req.logOut();
  res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
})
