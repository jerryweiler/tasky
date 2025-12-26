<script lang="ts">
    import { goto } from '$app/navigation';
    import { SquarePlus } from '@lucide/svelte';
    import type { ClassValue } from 'svelte/elements';

    let { parentid = 0, class: classname = '' }: { parentid?: number; class?: ClassValue } =
        $props();
</script>

<button title="New Task" onclick={() => goto(`/task/${parentid}/new`)}>
    <SquarePlus class="mr-2 size-6 shrink-0 {classname}" />
</button>
