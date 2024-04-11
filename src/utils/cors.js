'use strict';

require('dotenv/config');

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: 'GET,POST,PATCH',
  credentials: true,
};

module.exports = { corsOptions };
