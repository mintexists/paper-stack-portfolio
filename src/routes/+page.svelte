<script lang="ts">
	import { setContext } from 'svelte';
	import PaperContainer from './PaperContainer.svelte';

	import { motion } from '@humanspeak/svelte-motion';

	let containerEl: HTMLElement;

	setContext('containerEl', () => containerEl);

	// $inspect($scrollYProgress);
</script>

<div
	class="h-screen w-full snap-y snap-mandatory overflow-x-clip overflow-y-auto"
	bind:this={containerEl}
>
	{#each new Array(5).fill(0) as _, i (i)}
		<PaperContainer>
			<motion.div
				drag
				dragMomentum={false}
				class="pointer-events-auto relative h-[90%] w-1/3 bg-red-400 shadow-xl hover:scale-101"
				onwheel={(e: WheelEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
					e.preventDefault();
					// Object.defineProperty(e, 'target', { writable: false, value: containerEl });
					// containerEl.dispatchEvent(e);
					containerEl.scrollBy(0, e.deltaY * 0.00001);
					console.log(e);
					// const delta = e.deltaY;
					// // const maxScroll = containerEl.scrollHeight - containerEl.clientHeight;
					// containerEl.scrollTop = containerEl.scrollTop + delta;
				}}
			></motion.div>
		</PaperContainer>
	{/each}
	<div class="h-screen"></div>
</div>

<style>
	:global(body) {
		overflow: clip;
	}
</style>
