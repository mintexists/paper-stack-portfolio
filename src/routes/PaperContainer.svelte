<script lang="ts">
	import { useScroll, useTransform } from '@humanspeak/svelte-motion';
	import { getContext, type Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();

	let targetEl: HTMLElement | undefined;

	const { scrollYProgress } = useScroll({
		target: () => targetEl,
		container: getContext('containerEl'),
		offset: ['start end', 'end start']
	});

	const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0], { clamp: true });
</script>

<div class="pointer-events-none h-screen w-full snap-start snap-always" bind:this={targetEl}>
	{$scrollYProgress}
	<div
		class="pointer-events-none absolute top-0 flex h-screen w-full items-center justify-center"
		style="transform: translate({$translateX}%, 0%)"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
