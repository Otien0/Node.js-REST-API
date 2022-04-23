if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express               = require("express"),
      app                   = express(),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose");

// const dbUrl                 = process.env.DB_URL || 'mongodb://localhost:27017/node-REST-API';
const dbUrl                 = "mongodb://localhost/node-REST-API";
const MongoStore            = require('connect-mongo');

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const store = new MongoStore({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 3600
});

// "mongodb://localhost/node-REST-API"
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.urlencoded({extended: true}));
app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(mongoSanitize({
//     replaceWith: '_'
// }))




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`node-REST-API server running on port ${PORT}`);
});

// app.listen(3000, () => {
//     console.log("node-REST-API server running on port 3000")
// })