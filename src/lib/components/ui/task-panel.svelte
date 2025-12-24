<script lang="ts">
    import * as Tasks from "$lib/components/tasks"

    let {task}:{task: Tasks.Task} = $props();
</script>

<button
  class="hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
>
  <div class="flex w-full flex-col gap-1">
    <div class="flex items-center">
      <div class="ml-auto text-xs">
        {`id ${task.id}`}
      </div>
    </div>
    <div class="flex items-center">
      <div class="text-xs font-medium">title: {task.title}</div>
    </div>
  </div>
</button>
