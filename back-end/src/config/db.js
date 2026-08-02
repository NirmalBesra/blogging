const Database = require('better-sqlite3');

const db = new Database('blog.db'); // creates the file if it doesn't exist

db.pragma('journal_mode = WAL');

console.log("Connected to SQLite database!");

module.exports = db;