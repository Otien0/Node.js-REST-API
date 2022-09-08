const {
    ProductSchema,
    getProductsPage,
    updateProductSchema,
    signup,
    loginSchema,
  } = require("../apiSchema/JoiSchemas"),
  constants = require("../constants/index"),
  jwt = require("jsonwebtoken");

// Product VALIDATIONS::
const validateObjectSchema = (data) => {
  const result = ProductSchema.validate(data, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateProduct = () => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateObjectSchema(req.body);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.statusCode).send(response);
    }
    return next();
  };
};

const validatePaginationSchema = (data) => {
  const result = getProductsPage.validate(data);
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validatePaginationSchema = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validatePaginationSchema(req.query, schema);
    if (error) {
      response.body = error;
      console.log(error);
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.statusCode).send(response);
    }
    return next();
  };
};

const validateProductUpdate = (data) => {
  const result = updateProductSchema.validate(data, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateProductPut = () => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateProductUpdate(req.body);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.statusCode).send(response);
    }
    return next();
  };
};

// USER VALIDATIONS::

// USER SIGNUP
const validateUserSchema = (data) => {
  const result = signup.validate(data, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateUser = () => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateUserSchema(req.body);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.statusCode).send(response);
    }
    return next();
  };
};

//USER LOGIN
const validateLogin = (data) => {
  const result = loginSchema.validate(data, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateUserLogin = () => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateLogin(req.body);
    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      return res.status(response.statusCode).send(response);
    }
    return next();
  };
};

//Token Validations
module.exports.validateToken = (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    }

    // const arr = [];
    // const token = req.headers.authorization.split('Bearer')(typeof arr?.[1] === 'string' ? arr[1].trim() : '')
    const token = req.headers.authorization.split("Bearer")[1].trim();
    // const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY || "my-secret-key"
    );
    console.log("decoded", decoded);
    return next();
  } catch (error) {
    console.log("Error", error);
    response.message = error.message;
    response.statusCode = 401;
  }
  return res.status(response.statusCode).send(response);
};
