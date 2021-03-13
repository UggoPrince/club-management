const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.2',
  info: {
    title: 'Club Management API.', // Title of the documentation
    version: '1.0.0', // Version of the app
    description:
      'This is the documentation of the Club Management api.', // short description of the app
  },
};
const dir = path.join(__dirname, '..', '/');

const options = {
  swaggerDefinition,
  // path to the API docs
  apis: [`${dir}/**/*.yaml`],
};

// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
