const mongoose = require('mongoose');

module.exports = mongoose.connect(
    `Enter your mongoDB connection string here`,
    (err) => {
      if (err) return console.log('DB Not Connected');
      console.log('DB Connected');
    },
);
