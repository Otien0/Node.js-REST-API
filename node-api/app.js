const express               = require("express"),
      app                   = express(),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      dotEnv                = require('dotenv'),
      ejsMate               = require('ejs-mate'),
      cors                  = require('cors'),
      swaggerUi             = require('swagger-ui-express'),
      YAML                  = require('yamljs'),
      swaggerDocument       = YAML.load('./swagger.yaml');

const dbUrl                 = process.env.MONGO_URL || 'mongodb://localhost:27017/node-REST-API';

dotEnv.config();

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
app.use(express.urlencoded({ extended: true }));



app.use('/api/v1/product', require('./routes/products'));
app.use('/api/v1/user', require('./routes/users'));

// API DOCUMENTATION
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req, res, next) => {
    res.send('Welcome to node-REST-API version 1.0')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`node-REST-API server running on port ${PORT}`);
});