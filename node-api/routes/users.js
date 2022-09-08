const express = require("express"),
  router = express.Router(),
  users = require("../controllers/usersController"),
  { validateUser, validateUserLogin } = require("../middleware/validations"),
  Schema = require("../apiSchema/JoiSchemas");

router.post("/signup", validateUser(Schema.signup), users.signup);
router.post("/login", validateUserLogin(Schema.loginSchema), users.login);

module.exports = router;
