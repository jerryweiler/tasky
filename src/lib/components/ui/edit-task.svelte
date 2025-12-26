<script lang="ts">
	import { goto } from "$app/navigation";
	import { SquarePen } from "@lucide/svelte";
	import type { ClassValue } from "svelte/elements";

    let { id, class: classname = "" } : { id: number, class?: ClassValue } = $props();
</script>

<button title="Edit Task" onclick={() => goto(`/task/${id}/edit`)}>
    <SquarePen class="mr-2 size-6 shrink-0 {classname}"/>
</button>
