const userService = require("../service/userService"),
  constants = require("../constants");

//USER-SIGNUP POST-ROUTE-- Add new user to DB
module.exports.signup = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await userService.signup(req.body);
    response.statusCode = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: signup", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};

//USER-LOGIN POST-ROUTE-- Login user to DB
module.exports.login = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await userService.login(req.body);
    response.statusCode = 200;
    response.message = constants.userMessage.LOGIN_SUCCESS;
    response.body = serviceResponse;
  } catch (error) {
    console.log("Something went wrong: Controller: login", error);
    response.message = error.message;
  }
  return res.status(response.statusCode).send(response);
};
