import { addTask } from '$lib/server/tables/tasks';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        if (typeof title !== 'string' || title.length === 0) {
            return fail(400, { title, missing: true });
        }
        addTask(title);
    }
} satisfies Actions;
