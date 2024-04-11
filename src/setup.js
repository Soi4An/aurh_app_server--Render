'use strict';

const { User } = require('./models/User.js');
const { Token } = require('./models/Token.js');

async function syncModels() {
  await User.sync({ force: true });
  await Token.sync({ force: true });
}

syncModels();
