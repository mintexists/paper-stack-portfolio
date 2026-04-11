<script lang="ts">
	import { styleString } from '@humanspeak/svelte-motion';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class="aspect-[.714] h-[80vh] origin-center bg-amber-400 bg-contain px-20 py-17 text-base/[1] shadow-2xl"
	style={styleString({
		transform: `rotate(${(Math.random() * 2 - 1) * 10}deg) translate(${(Math.random() * 2 - 1) * 20}%, ${(Math.random() * 2 - 1) * 10}%)`,
		backgroundImage:
			'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F93%2Fe8%2F9393e89d391cef9804193cf76a624e11.jpg&f=1&nofb=1&ipt=fa8dce6e715a7a69d7e736bf4daee921752aca2adc236de6c28d16a779a53174")',
		fontFamily: '"Schoolbell", cursive'
	})}
	contenteditable="true"
>
	{#if children}
		{@render children()}
	{/if}
</div>
