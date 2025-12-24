<script lang="ts">
	import TaskPanel from '$lib/components/ui/task-panel.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<TaskPanel task={data.task} />
