<script lang="ts">
    import CreateTask from '$lib/components/ui/create-task.svelte';
    import EditTask from '$lib/components/ui/edit-task.svelte';
    import TaskPanel from '$lib/components/ui/task-panel.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<div class="w-60">
    <div class="my-2 flex flex-row justify-end">
        <CreateTask parentid={data.task.id} />
        <EditTask id={data.task.id} />
    </div>
    <TaskPanel task={data.task} class="w-full" />
</div>
