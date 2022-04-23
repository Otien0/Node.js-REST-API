if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express               = require("express"),
      app                   = express(),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      dotEnv                = require('dotenv'),
      ejsMate               = require('ejs-mate'),
      ExpressError          = require('./utils/ExpressError'),
      cors                  = require('cors');

const dbUrl                 = process.env.MONGO_URL || 'mongodb://localhost:27017/node-REST-API';
// const dbUrl                 = "mongodb://localhost/node-REST-API";

dotEnv.config();


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

//request payload middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(mongoSanitize({
//     replaceWith: '_'
// }))


app.use('/api/v1/product', require('./routes/products'));

app.get('/', (req, res, next) => {
    res.send('Welcome to node-REST-API version 1.0')
})

// app.all('*', (req, res, next) => {
//     next(new ExpressError('Page Not Found', 404))
// })

//error handling middleware
// app.use((err, req, res, next) => {
//     const { statusCode = 500 } = err;
//     if (!err.message) err.message = 'Oh No, Something Went Wrong!'
//     res.status(statusCode).render('error', { err })
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`node-REST-API server running on port ${PORT}`);
});