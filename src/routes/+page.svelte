<script lang="ts">
    import * as Tasks from "$lib/components/tasks"
	import CreateTask from "$lib/components/ui/create-task.svelte";
    import TaskPanel from "$lib/components/ui/task-panel.svelte"

    let tasksPromise = Tasks.getTasks();
</script>

<div class="w-60">
    <div class="flex flex-row justify-end my-2">
        <CreateTask />
    </div>
    {#await tasksPromise then tasks}
        {#each tasks as task}
            <TaskPanel {task} class="w-full"/>
        {/each}
    {/await}
</div>
