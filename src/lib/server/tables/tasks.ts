import { database } from "$lib/server/database";

export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

function initialize() {
    database.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0
        )
        `);
    console.log("task table initialized");
}

function addTask(title: string) : Task {
    const stmt = database.prepare('INSERT INTO tasks (title) VALUES (?)');
    const info = stmt.run(title);
    return {
        id: Number(info.lastInsertRowid),
        title: title,
        completed: false,
    }
}

function deleteTask(id: number) : boolean {
    const stmt = database.prepare('DELETE FROM tasks WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
}

function markComplete(id: number, completed: boolean): boolean {
    const stmt = database.prepare('UPDATE tasks SET completed = ? WHERE id = ?');
    const info = stmt.run(completed, id);
    return info.changes > 0;
}

function getTask(id: number): Task[] {
    const stmt = database.prepare('SELECT * FROM tasks where id = ?');
    return stmt.all(id) as Task[];
}

function getAllTasks(): Task[] {
    const stmt = database.prepare('SELECT * FROM tasks ORDER BY id DESC');
    return stmt.all() as Task[];
}

export {
    initialize,
    addTask,
    deleteTask,
    markComplete,
    getTask,
    getAllTasks,
}
