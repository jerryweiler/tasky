<script lang="ts">
	import TaskPanel from '$lib/components/ui/task-panel.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-60">
    <TaskPanel task={data.task} class="w-full" />
</div>
