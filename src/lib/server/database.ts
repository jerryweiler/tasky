import Database, * as BetterSqlite3 from 'better-sqlite3';

function openDatabase(): BetterSqlite3.Database {
    const database: BetterSqlite3.Database = new Database('tasks.sqlite');

    console.log('db initialized');
    return database;
}

const database: BetterSqlite3.Database = openDatabase();
export { database };
