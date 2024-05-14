//This file includes all the different types of error that are to be included while error handling is to be done using the middleware.
//These are different Http methods for the client, that is used to make use in the error Handler.
exports.constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};