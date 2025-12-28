import { database } from "$lib/server/database";

export type Task = {
    id: number;
    parentid: number;
    title: string;
    description: string;
    completed: Date | null;
};

// a task as stored in the database
type DbTask = {
    id: number;
    parentid: number;
    title: string;
    description: string;
    completed: string | null;
};

function toTask(value: DbTask): Task {
    return {
        id: value.id,
        parentid: value.parentid,
        title: value.title,
        description: value.description,
        completed: value.completed ? new Date(value.completed) : null
    }
}

function initialize() {
    database.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parentid INTEGER NOT NULL DEFAULT 0,
            title TEXT NOT NULL,
            description TEXT DEFAULT "",
            completed TEXT DEFAULT NULL
        )
        `);
    console.log("task table initialized");
}

function addTask(title: string, parentid: number = 0): Task {
    const stmt = database.prepare('INSERT INTO tasks (parentid, title) VALUES (?, ?)');
    const info = stmt.run(parentid, title);
    return {
        id: Number(info.lastInsertRowid),
        parentid,
        title,
        description: '',
        completed: null
    };
}

function deleteTask(id: number) : boolean {
    const stmt = database.prepare('DELETE FROM tasks WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
}

function markComplete(id: number): boolean {
    const stmt = database.prepare("UPDATE tasks SET completed = datetime('now') WHERE id = ?");
    const info = stmt.run(id);
    return info.changes > 0;
}

function clearComplete(id: number): boolean {
    const stmt = database.prepare('UPDATE tasks SET completed = NULL WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
}

function getTask(id: number): Task | null {
    const stmt = database.prepare<unknown[], DbTask>(
        'SELECT id, parentid, title, description, completed FROM tasks where id = ?'
    );

    const result = stmt.get(id);
    if (!result) return null;
    return toTask(result);
}

function getChildren(parentid: number): Task[] {
    const stmt = database.prepare<unknown[], DbTask>(
        'SELECT id, parentid, title, description, completed FROM tasks where parentid = ?'
    );
    return stmt.all(parentid).map(toTask);
}

function getAllTasks(): Task[] {
    const stmt = database.prepare<unknown[], DbTask>(
        'SELECT id, parentid, title, description, completed FROM tasks ORDER BY id DESC'
    );
    return stmt.all().map(toTask);
}

export {
    initialize,
    addTask,
    deleteTask,
    markComplete,
    clearComplete,
    getTask,
    getChildren,
    getAllTasks
};
