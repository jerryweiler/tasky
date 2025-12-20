// client wrappers to manipulate task data using API routes
export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

async function getTask(id: string) : Promise<Task> {
    const response = await fetch(`api/task/${id}`);
    return await response.json() as Task;
}

async function getTasks() : Promise<Task[]> {
    const response = await fetch("api/tasks");
    return await response.json() as Task[];
}

export {
    getTask,
    getTasks,
}
