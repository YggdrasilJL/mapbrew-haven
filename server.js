const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');
const routes = require('./controllers');

const User = require('./models/User');

const flash = require('express-flash');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));


const sess = {
  secret: 'secret here',
  cookie: {
    maxAge: 1800000,
    // name: 'myServerID',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view-engine', 'ejs');
app.use(flash());
app.use(routes)

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUser); // Sending the new user data as JSON response
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err); // Sending an error response
  }
});

// app.get("/login",(req, res)=> {
// res.render("login.ejs")
// })
// app.get('/login', checknotAuthenticated, (req, res) => {
//   res.render('login.ejs');
// });

// app.get('/register', checknotAuthenticated, (req, res) => {
//   res.render('register.ejs');
// });

// app.post(
//   '/login',
//   checknotAuthenticated,
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureflash: true,
//   })
// );

// app.post('/register', checknotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     res.redirect('/login');
//   } catch {
//     res.redirect('/register');
//   }
//   console.log(users);
// });

// app.delete('/logout', (req, res) => {
//   req.logOut();
//   res.redirect('/login');
// });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }

// function checknotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/');
//   }
//   next();
// }
// app.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       res.status(200).json(newUser); // Sending the new user data as JSON response
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err); // Sending an error response
//   }
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}.`));
});
