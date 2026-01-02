import type { PageLoad } from './$types';
import * as Tasks from '$lib/components/tasks';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    const task = await Tasks.getTask(params.id);
    if (!task) {
        error(404, `Task ${params.id} not found`);
    }

    console.log(task);

    return { task };
};
