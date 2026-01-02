import { json } from '@sveltejs/kit';
import { getTask } from '$lib/server/tables/tasks';

export async function GET({ params }) {
    const id = Number(params.id ?? 0);
    return json(getTask(id));
}
