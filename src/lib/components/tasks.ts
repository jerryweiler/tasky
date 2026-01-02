// client wrappers to manipulate task data using API routes
export type Task = {
    id: number;
    parentid: number;
    title: string;
    description: string;
    completed: Date | undefined;
};

async function getTask(id: string): Promise<Task | null> {
    const response = await fetch(`/api/task/${id}`);
    return await response.json();
}

async function getTasks(): Promise<Task[]> {
    const response = await fetch('/api/tasks');
    return (await response.json()) as Task[];
}

async function getChildren(parentid: string): Promise<Task[]> {
    const response = await fetch(`/api/children/${parentid}`);
    return (await response.json()) as Task[];
}

export {
    getTask,
    getTasks,
    getChildren
};
