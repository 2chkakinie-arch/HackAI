const { VercelRequest, VercelResponse } = require('@vercel/node');
const app = require('../app');

module.exports = (vreq, vres) => app(vreq, vres);
