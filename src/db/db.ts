const { Pool } = require('pg');
const { drizzle } = require('drizzle-orm/node-postgres');

// configure the connection pool 
const pool = new Pool({
	connectionString:process.env.DB_URL
})


// export the drizzle instance 
module.exports = { db: drizzle(pool) };

