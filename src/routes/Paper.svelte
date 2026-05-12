<script lang="ts">
	import { cn } from '$lib';
	import { styleString } from '@humanspeak/svelte-motion';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	let { children, class: className }: { children?: Snippet; class?: ClassValue } = $props();
</script>

<div
	class={cn(
		'paper relative aspect-[.714] h-[80vmin] origin-center bg-white bg-contain px-[10%] py-[10%] text-base/[1] transition-shadow duration-100 ease-out',
		className
	)}
	style={styleString({
		// backgroundImage:
		// 	'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F93%2Fe8%2F9393e89d391cef9804193cf76a624e11.jpg&f=1&nofb=1&ipt=fa8dce6e715a7a69d7e736bf4daee921752aca2adc236de6c28d16a779a53174")',
		fontFamily: '"Schoolbell", cursive',
		// boxShadow: 'var(--shadow-style);',
		filter: 'url(#wavy);'
	})}
>
	{#if children}
		{@render children()}
	{/if}
</div>
