const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  dotEnv = require("dotenv"),
  path = require("path"),
  connectDB = require("./database/db"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  swaggerUi = require("swagger-ui-express"),
  YAML = require("yamljs"),
  swaggerDocument = YAML.load("./swagger.yaml");

const user = require("./routes/users");
const products = require("./routes/products");

dotEnv.config();
connectDB();

//request payload middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
app.use("/api/v2/user", user);
app.use("/api/v2/product", products);

// API DOCUMENTATION
if (process.env.NODE_ENV != "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
  app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get("/", (req, res, next) => {
  // res.send("Welcome to node-REST-API version 2.0");
  res.send(
    "Welcome to products-REST-API version 2.0.  <h1>Go to: /api-doc  for Swagger API Documentation.</h1>"
  );
});

// CONFIGURE WITH FRONTEND ON PRODUCTION
// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("frontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("Welcome to node-REST-API version 2.0");
//     res.send("<h1>Go to: /api-docs/  for Swagger API Documentation.</h1>");
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`node-REST-API server running on port ${PORT}`);
});
