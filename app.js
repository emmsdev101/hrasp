const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");
const path = require("path");
const conn = require("./config/DbConnection").con;

const PORT = 4000;

const {auth, authAdmin, authApplicant} = require("./helper/auth");
const adminRoute = require("./routes/AdminRoutes");
const applicantRoute = require("./routes/ApplicantRoute");
const noAuthRoute = require("./routes/NoAuthRoutes")
const oneDay = 1000 * 60 * 60 * 24;

app.use(cors({ origin: ["http://localhost:3000","http://192.168.254.103:3000"], credentials:true}));
app.use(
  session({
    secret: "emms",
    resave: false,
    cookie: { maxAge: oneDay },
    saveUninitialized: false,
  })
);
app.use(cookieParser("emmsz"))

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/admin", authAdmin)
app.use("/applicant", authApplicant)

app.use("/uploads", express.static(path.join(__dirname, "uploads/")));

app.use("/admin", adminRoute);
app.use("/applicant", applicantRoute);
app.use("/logout", noAuthRoute)
app.use("/", noAuthRoute)

app.listen(PORT, () => {
  console.log("Server is listening at port: " + PORT);
});
conn.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Database connected");
});
module.exports = app;