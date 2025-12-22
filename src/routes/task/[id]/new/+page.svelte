<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageProps } from './$types';

    let { form }: PageProps = $props();
</script>

<form method="POST" use:enhance>
    {#if form?.missing}<p class="error">A valid title is required</p>{/if}
    <label>
        Title
        <input name="title" />
    </label>
    <button>Save</button>
</form>
