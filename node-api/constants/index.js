module.exports = {
    defaultServerResponse: {
        statusCode: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_UPDATED: 'Product Updated Successfully',
        PRODUCT_DELETED: 'Product Deleted Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found'

    },
    userMessage: {
        SIGNUP_SUCCESS: 'User Signed-up Successfully',
        DUPLICATE_EMAIL: 'User already exits with the given email',
        LOGIN_SUCCESS: 'User Loggedin Successfully',
        USER_NOT_FOUND: 'User Not Found. Please Signup First!',
        INVALID_PASSWORD: 'Incorrect Password'

    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid Fields',
        TOKEN_MISSING: 'Token Missing From header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}