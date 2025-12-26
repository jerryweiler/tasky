<script lang="ts">
    import { goto } from '$app/navigation';
    import * as Tasks from '$lib/components/tasks';
    import type { ClassValue } from 'svelte/elements';

    let { task, class: classname = '' }: { task: Tasks.Task; class?: ClassValue } = $props();
</script>

<button
    class="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent {classname}"
    onclick={() => goto(`/task/${task.id}`)}
>
    <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
            <div class="ml-auto text-xs">
                {`id ${task.id}`}
            </div>
        </div>
        <div class="flex items-center">
            <div class="text-xs font-medium">
                title: {task.title}
            </div>
        </div>
    </div>
</button>
