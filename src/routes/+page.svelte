<script lang="ts">
    import * as Tasks from '$lib/components/tasks';
    import CreateTask from '$lib/components/ui/create-task.svelte';
    import TaskPanel from '$lib/components/ui/task-panel.svelte';

    let tasksPromise = Tasks.getTasks();
</script>

<div class="w-60">
    <div class="my-2 flex flex-row justify-end">
        <CreateTask />
    </div>
    {#await tasksPromise then tasks}
        {#each tasks as task}
            <TaskPanel {task} class="w-full" />
        {/each}
    {/await}
</div>
