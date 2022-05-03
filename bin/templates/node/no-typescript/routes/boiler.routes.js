/* eslint-disable new-cap */
const express = require('express');

const {fetchSampleData} = require('../controllers/boiler.controller');

const route = express.Router();

route.post('/sample/:id', fetchSampleData);
