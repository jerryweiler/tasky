import * as tasks from "$lib/server/tables/tasks"
import type { ServerInit } from "@sveltejs/kit"

export const init: ServerInit = () => {
    // create and initialize tables if they don't already exist
    tasks.initialize();
}
