const Database = require('better-sqlite3');
const db = new Database('../db/db.db');

try {
    const result = db.prepare('SELECT 1 AS connected').get();
    if(result.connected === 1)
        {
            console.log('Database connection is active and responding!');
        }

}catch(err){
    console.error('Database query failed', err.message);
}
module.exports = db;