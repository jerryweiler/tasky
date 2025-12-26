import { json } from '@sveltejs/kit';
import { getAllTasks } from '$lib/server/tables/tasks';

export async function GET() {
    return json(getAllTasks());
}
