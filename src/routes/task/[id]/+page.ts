import type { PageLoad } from './$types';
import * as Tasks from '$lib/components/tasks';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const tasks = await Tasks.getTask(params.id);
	if (tasks.length < 1) {
		error(404, `Task ${params.id} not found`);
	}

	console.log(tasks);

	return { task: tasks[0] };
};
