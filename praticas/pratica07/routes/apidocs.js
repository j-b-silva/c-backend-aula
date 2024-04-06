const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');

const Router = express.Router();
const file = fs.readFileSync('./swagger.yaml', 'utf-8');
const swaggerDoc = YAML.parse(file);

Router.get("/", swaggerUI.serve);

Router.get("/", swaggerUI.setup(swaggerDoc))

module.exports = Router;