<script lang="ts">
    import * as Tasks from "$lib/components/tasks"
    import TaskPanel from "$lib/components/ui/task-panel.svelte"

    let tasksPromise = Tasks.getTasks();
</script>

<div class="w-60">
    {#await tasksPromise then tasks}
        {#each tasks as task}
            <TaskPanel {task} class="w-full"/>
        {/each}
    {/await}
</div>
