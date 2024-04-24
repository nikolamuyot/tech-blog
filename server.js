require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { engine } = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection"); // Import Sequelize configuration

const PORT = process.env.PORT || 3000;

// Initialize the Express application
const app = express();

// Set up Handlebars.js as the default templating engine.
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middleware for session management
app.use(
  session({
    secret: "super secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Use the combined routes
app.use("/api", require("./routes"));
// Use the post routes
// app.use("/api/posts", require("./routes/postRoutes"));

// Sync sequelize models then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
