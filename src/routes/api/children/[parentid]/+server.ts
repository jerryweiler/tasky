import { json } from '@sveltejs/kit';
import { getChildren } from '$lib/server/tables/tasks';

export async function GET({ params }) {
    const parentid = Number(params.parentid);
    return json(getChildren(parentid));
}
