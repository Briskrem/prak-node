const { Client } = require('pg');

const DB_URL = 'postgresql:///jobly';

const db = new Client({connectionString: DB_URL});
db.connect();

module.exports = db