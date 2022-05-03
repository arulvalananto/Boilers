/* eslint-disable new-cap */
const mongoose = require('mongoose');

const boilerSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Boilerplate must have a title'],
    trim: true,
  },
});

module.exports = mongoose.model('Boiler', boilerSchema);
