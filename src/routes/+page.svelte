<script lang="ts">
	import Paper from './Paper.svelte';

	import PaperContainer from './PaperContainer.svelte';

	import { cn, setContainerContext } from '$lib';

	let containerEl: HTMLElement = $state(undefined);

	setContainerContext(() => containerEl);

	let scrollTopCopy = $state(0);

	let shouldScrollSnap = $state(true);

	let timeout: NodeJS.Timeout | undefined = $state(undefined);

	const smoothScrollTimeout = 500;

	// $inspect($scrollYProgress);
	// let lastScrollTime =
</script>

<div
	class={cn(
		'h-screen w-full overflow-x-clip overflow-y-scroll',
		shouldScrollSnap && 'snap-y snap-mandatory scroll-smooth'
	)}
	bind:this={containerEl}
	onscroll={(e) => (scrollTopCopy = containerEl.scrollTop)}
>
	<!-- {#each new Array(5).fill(0) as _, i (i)}
		<PaperContainer bind:scrollTopCopy bind:shouldScrollSnap bind:timeout {smoothScrollTimeout}>
			<div
				class="aspect-[.714] h-[80vh] origin-center bg-amber-400 shadow-2xl"
				style={styleString({
					transform: `rotate(${(Math.random() * 2 - 1) * 10}deg) translate(${(Math.random() * 2 - 1) * 20}%, 0%)`
				})}
			></div>
		</PaperContainer>
	{/each} -->
	<div class="h-screen snap-start"></div>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={-100}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
		</Paper>
	</PaperContainer>
	<div class="h-screen"></div>
</div>

<style>
	:global(body) {
		overflow: clip;
	}
</style>
